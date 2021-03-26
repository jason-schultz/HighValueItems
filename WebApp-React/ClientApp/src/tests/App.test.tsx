import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import App from '../app/App';
import CategoryHeader from '../components/CategoryHeader'
import { ContentItem } from '../models/ContentItem';

const getById = queryByAttribute.bind(null, 'id')


test('Category Heading displays text and value', () => {
    const text = "Hello"
    const arr:ContentItem[] = [{
        id: "1",
        name: 'Test 1',
        value: 1,
        category: 'test'
    }]
    const result = render(<CategoryHeader text={text} items={arr} />)
    const name = result.container.querySelector('#name')
    expect(name).toBeInTheDocument()
    const value = result.container.querySelector('#value')
    expect(value).toBeInTheDocument()
})