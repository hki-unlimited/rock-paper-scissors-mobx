import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '../../i18n';
import Header from '../../components/Header/Header';

afterEach(cleanup);

test("App header is rendered", async () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
});

test("App header contains Schenker logo", async () => {
    const { container } = render(<Header />);
    const logo = await(() => container.querySelector(".dbs-main-logo"));
    expect(logo).toBeTruthy();
});