import React, { ChangeEvent, FC, useState, useEffect, ReactElement, KeyboardEvent, useRef } from "react";
import classNames from "classnames";
import Input, { InputProps } from "../Input/input";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
interface DataSourceObject {
    value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        value,
        renderOption,
        ...restProps
    } = props;

    const [inputValue, setInputValue] = useState(value as string);
    const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
    const [loading, setLoading] = useState(false);
    const [hightlightIndex, setHightlightIndex] = useState(-1);


    const triggerSearch = useRef(false);
    const componentRef = useRef<HTMLDivElement>(null)

    const debouncedValue = useDebounce(inputValue, 500);
    useClickOutside(componentRef, () => { setSuggestions([]) });

    useEffect(() => {
        if (debouncedValue && triggerSearch.current) {
            const results = fetchSuggestions(debouncedValue);
            if (results instanceof Promise) {
                console.log('triggered')
                setLoading(true)
                results.then(data => {
                    setLoading(false)
                    setSuggestions(data)
                })
            } else {
                setSuggestions(results);
            }
        } else {
            setSuggestions([]);
        }
        setHightlightIndex(-1)
    }, [debouncedValue]);

    const hightlight = (index: number) => {
        if (index < 0) index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHightlightIndex(index)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.keyCode) {
            case 13:
                if (suggestions[hightlightIndex]) {
                    handleSelect(suggestions[hightlightIndex])
                }
                break
            case 38:
                hightlight(hightlightIndex - 1)
                break
            case 40:
                hightlight(hightlightIndex + 1)
                break
            case 27:
                setSuggestions([])
                break
            default:
                break

        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };

    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            onSelect(item)
        }
        triggerSearch.current = false;
    }

    const renderTemplate = (item: DataSourceType) => (
        renderOption ? renderOption(item) : item.value
    )

    const generateDropdown = () => {
        return (
            <ul>
                {suggestions.map((item, index) => {
                    const cname = classNames('suggestion-item', {
                        'item-highlighted': index === hightlightIndex
                    })
                    return (
                        <li key={index} className={cname} onClick={() => handleSelect(item)}>
                            {renderTemplate(item)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className="auto-complete" ref={componentRef}>
            <Input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...restProps}
            />
            {loading && <ul> <Icon icon="spinner" spin /></ul>}
            {suggestions.length > 0 && generateDropdown()}
        </div>
    )
}

export default AutoComplete;