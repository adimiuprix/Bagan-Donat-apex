import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GraphView from './index';
import { BrowserRouter } from "react-router-dom";


describe('<GraphView />', () => {
    test("should render Home Component correctly", () => {
        render(
            <BrowserRouter>
                <GraphView
                    chartData={[]}
                    labels={[]}
                    data={[]}
                    innerChartRef={{}}
                    onClickHandler={() => { }} />
            </BrowserRouter>);
        const canvas = screen.getByTestId("favGraph");
        expect(canvas).toBeInTheDocument();
    });
    test('should handles click event correctly', () => {
        const onClickHandlerMock = jest.fn();
        const { getByTestId } = render(
            <BrowserRouter>
                <GraphView
                    chartData={[{ label: 'January', value: 80 }]}
                    labels={['January']}
                    data={[80]}
                    innerChartRef={{}}
                    onClickHandler={onClickHandlerMock}
                />
            </BrowserRouter>
        );
        const chart = getByTestId('favGraph');

        fireEvent.click(chart);

        expect(onClickHandlerMock).toHaveBeenCalled();
    })
})


