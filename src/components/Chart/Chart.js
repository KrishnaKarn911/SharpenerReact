import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const priceArray = props.chartExpenses.map((monthExpenses) => {
    return monthExpenses.price;
  });
  const maxPrice = Math.max(...priceArray);
  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sept", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (let expense of props.chartExpenses) {
    chartData[expense.date.getMonth()].expenseValue += expense.price;
  }
  console.log(chartData);
  return (
    <div className="chart">
      {chartData.map((monthData) => {
        return (
          <ChartBar
            lable={monthData.expenseMonth}
            value={monthData.expenseValue}
            key={monthData.expenseMonth}
            maxValue={maxPrice}
          />
        );
      })}
    </div>
  );
};

export default Chart;
