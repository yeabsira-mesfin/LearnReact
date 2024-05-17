import React from 'react'
import { render } from '@testing-library/react';
import App from './App';

test('Render hello testing', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/Hello, Testing!/i);
    expect(linkElement).toBeinTheDocument();
});