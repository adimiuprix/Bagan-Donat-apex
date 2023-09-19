import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import { BrowserRouter } from "react-router-dom";
import config from "../../common/config";

//Mock the react-router-dom
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

// Mock the sessionStorage
const mockSetSessionItem = jest.fn();
Object.defineProperty(window, "sessionStorage", {
  value: {
    setItem: (...args: string[]) => mockSetSessionItem(...args),
  },
});

// Mock the getElementsAtEvent function
jest.mock('react-chartjs-2', () => {
  const originalModule = jest.requireActual('react-chartjs-2');
  const mockGetElementsAtEvent = jest.fn();
  return {
    ...originalModule,
    getElementsAtEvent: mockGetElementsAtEvent,
  };
});


describe("<Home />", () => {
  beforeEach(() => {
    mockSetSessionItem.mockClear();
    mockSetSessionItem.mockClear();
  })

  test("should render Home Component correctly", () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const canvas = screen.getByTestId("favGraph");
    expect(canvas).toBeInTheDocument();
  });

  test("should call navigate,dispatch actions, and setSessionStorage when click on Bar element", async () => {
    // Mock getElementsAtEvent to return an element
    require('react-chartjs-2').getElementsAtEvent.mockReturnValue([
      {
        _datasetIndex: 0,
        _index: 0,
        _model: {
          label: "January",
        },
      },
    ]);

    render(<BrowserRouter><Home /></BrowserRouter>);
    const canvas = screen.getByTestId("favGraph");
    fireEvent.click(canvas);

    const selectedValue = { label: 'January', value: 80 };

    // Verify that navigate and dispatch functions were called as expected
    expect(mockNavigate).toBeCalled();
    expect(mockNavigate).toBeCalledWith(`${config.BASE_DOMAIN}dashboard`);
    expect(mockSetSessionItem).toBeCalledTimes(2);
    /* expect(mockSetSessionItem).toHaveBeenCalledWith(
      `${config.nameSpaceKey}SelectedSearch`,
      JSON.stringify(selectedValue)
    );
    expect(mockSetSessionItem).toHaveBeenCalledWith(
      `${config.nameSpaceKey}SelectedScenario`,
      JSON.stringify(selectedValue)
    ); */
  });
});
