import React, { useRef } from "react";
import { Card, CardBody } from "reactstrap";
import GraphView from "../../components/GraphView";
import { useNavigate } from "react-router-dom";
import { setSessionStorage } from "../../common";
import config from "../../common/config";
import { getElementsAtEvent } from "react-chartjs-2";

const Index = () => {
  let chartData = [
    {
      label: "January",
      value: 80,
    },
    {
      label: "March",
      value: 25,
    },
    {
      label: "April",
      value: 40,
    },
    {
      label: "May",
      value: 76,
    },
    {
      label: "June",
      value: 30,
    },
    {
      label: "July",
      value: 90,
    },
  ];
  let labels = chartData.map((el) => el.label);
  let data = chartData.map((el) => el.value);
  const chartRef = useRef(null);

  const navigate = useNavigate();

  const navigationHandler = (selectedValue) => {
    navigate(`${config.BASE_DOMAIN}dashboard`);
    setSessionStorage("_SelectedSearch", { test: selectedValue });
    setSessionStorage("_SelectedScenario", { test: selectedValue });
  };

  const onClickHandler = (e) => {
    const { current: chart } = chartRef;

    if (!chart) return;

    let element = getElementsAtEvent(chart, e);

    if (element.length === undefined) return;

    const { index } = element[element.length - 1];

    const labelName = labels[index];
    let selectedValue = chartData.find((el) => el.label === labelName);
    navigationHandler(selectedValue);
  };

  return (
    <>
      <Card>
        <CardBody>
          <GraphView
            chartData={chartData}
            labels={labels}
            data={data}
            chartRef={chartRef}
            onClickHandler={onClickHandler}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default Index;
