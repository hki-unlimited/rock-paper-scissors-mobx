import React from "react";
import { BrowserRouter } from "react-router-dom";
import nock from "nock";
import { render, fireEvent, waitForElement,
    cleanup, waitForDomChange } from "@testing-library/react";
import "../../i18n";
import Search from "../../views/Search/Search";

afterEach(cleanup);

test("Search view returns the correct result when queried", async () => {
    nock("http://localhost:8080")
    .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
    .get("/search?searchText=vantaa")
    .reply(200, { result: [ {
        id:	3,
        externalId:	"CCCCCCC",
        name:	"Vantaan Peruna",
        businessId:	"123476f-8",
        contracts: [
            { id: 6, name: "Sopimus 1"},
            { id:	10, name: "Vanha sopimus"} ],
        partOfGroup: { id: 0, name: "not_implemented"},
        responsibleUser: { id: 0,
            name: "not_implemented"},
        lastEditBy:	{ id: 0,
        name: "not_implemented" }}]
    });
    
    const { getByTestId, container } = render(
        <BrowserRouter>
            <Search />
        </BrowserRouter>);
    const inputField = getByTestId("searchtext-input-container");
    fireEvent.change(inputField, { target: { value: "vantaa" }});
    
    expect(inputField.value).toBe("vantaa");
    fireEvent.click(getByTestId("search-query-button"));

    await waitForDomChange({ container });
    const dataTable = await waitForElement(() =>
        getByTestId("search-query-results-data-table"));
    expect(dataTable.innerHTML).toContain("Vantaan Peruna");

    nock.cleanAll();
 });

test("Renders 0 results when there are no results", async () => {
    nock("http://localhost:8080")
    .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
    .get("/search?searchText=ThisResultIsEmpty")
    .reply(200, { result : []});

    const { getByTestId, container } = render(
        <BrowserRouter>
            <Search />
        </BrowserRouter>);
    const inputField = getByTestId("searchtext-input-container")
    fireEvent.change(inputField, { target: { value: "ThisResultIsEmpty" }});
    
    expect(inputField.value).toBe("ThisResultIsEmpty");
    fireEvent.click(getByTestId("search-query-button"));

    await waitForDomChange({ container });
    const dataTable = await waitForElement(() =>
        getByTestId("search-query-results-container"));
    expect(dataTable.innerHTML).toContain("No search results.");

    nock.cleanAll();
});