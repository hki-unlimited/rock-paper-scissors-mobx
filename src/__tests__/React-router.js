import React from 'react';
import '../i18n';
import App from '../App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test("Home tab is My Tasks-tab", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("tasks-tab-navlink"))
        .toHaveClass("nav-link active");
});

test("App displays correct view when changing tab", () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId("search-tab-navlink"));
    expect(getByTestId("main-search-view")).toBeTruthy();
    expect(window.location.pathname).toBe("/search");
});