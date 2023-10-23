import React from "react";
import { Chart } from "react-google-charts";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

export const data = [
  ["Month", "Sign-ups", "Sales"],
  ["January", 1000, 400],
  ["February", 1170, 460],
  ["March", 660, 1120],
  ["Appril", 1030, 540],
  ["May", 1030, 1120],
  ["June", 1030, 540],
  ["July", 1030, 1120],
  ["August", 660, 300],
  ["September", 800, 400],
  ["October", 720, 540],
  ["November", 300, 540],
];

const secondaryNavigation = [
  { name: "Last 7 days", href: "#", current: false },
  { name: "Last 30 days", href: "#", current: false },
  { name: "All-time", href: "#", current: true },
];

export const options = {
  title: "Caregiver Compass Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const DashboardMetric = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-t-4 border-blue-500">
      <p className="text-gray-600 uppercase text-xs">{title}</p>
      <p className="text-3xl text-blue-600 font-bold">{value}</p>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className=" min-h-screen p-8">
      <header className="pb-4 pt-6 sm:pb-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            Cashflow
          </h1>
          <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={item.current ? "text-indigo-600" : "text-gray-700"}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <DashboardMetric title="Active Users" value="5,000" />
        <DashboardMetric title="New Sign-Ups" value="300" />
        <DashboardMetric title="Churn Rate" value="2%" />
        <DashboardMetric title="App Downloads" value="10,000" />
        <DashboardMetric title="User Growth Rate" value="10%" />
      </div>
      {/* Example Chart */}
      <div className="bg-white p-6 rounded shadow-lg py-12 my-12 border-t-4 border-blue-500">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}
