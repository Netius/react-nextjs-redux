import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/products/page'
import React, { createElement } from 'react';
import { StoreProvider } from "../app/StoreProvider";
import fetch from 'cross-fetch';


 
describe('Page', () => {
  it('renders a without crashing', () => {
    const div = createElement('div');

    render(
    <StoreProvider>
      <Page />, {div} 
    </StoreProvider>
    )
 
    // const heading = screen.getByRole('heading', { level: 1 })
 
    // expect(heading).toBeInTheDocument()


  })
})