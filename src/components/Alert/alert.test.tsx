import { render, screen } from '@testing-library/react'
import Alert, { AlertProps } from './alert'
import React from 'react'

jest.mock('../Icon/icon', () => {
    return (props: any) => {
        return <span>{props.icon}</span>
    }
})

const testProps: AlertProps = {
    title: 'title',
    onClose: jest.fn()
}

const typeProps: AlertProps = {
    ...testProps,
    type: 'success',
    description: 'hello',
    closable: false
}

describe('test Alert Component', () => {
    it('should render the correct default Alert', () => {
        render(<Alert {...testProps} />);
        const element = screen.getByText('title');
        expect(element).toBeInTheDocument();
        expect(screen.getByTestId('test-alert')).toHaveClass('alert-default');
    });

    it('should render the correct Alert based on different type and description', () => {
        render(<Alert {...typeProps} />);
        expect(screen.getByText('title')).toHaveClass('bold-title');
        expect(screen.getByTestId('test-alert')).toHaveClass('alert-success');
        expect(screen.getByText('hello')).toBeInTheDocument();
        expect(screen.queryByText('times')).not.toBeInTheDocument();
    });
})