import { storiesOf } from "@storybook/react";
import { AutoComplete } from "./autoComplete";
const SimpleComplete = () => {
    const lakes = [
        'bradley', 'pope', 'caruso', 'cook', 'cousins',
        'jams', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'
    ]
    const handleFetch = (query: string) => {
        return lakes.filter(name => { name.includes(query) })
    }
    return (
        <AutoComplete
            fetchSuggestions={handleFetch}
        />
    )
}

storiesOf('AutoComplete Component', module)
    .add('AutoComplete', SimpleComplete)