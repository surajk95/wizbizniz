import { LineChart } from '@tremor/react';

const valueFormatter = function (number) {
  return new Intl.NumberFormat('us').format(number).toString();
};


export default function LineWidget({ title, data }) {
  return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">{title}</h3>
      <LineChart
        className="mt-4"
        data={data}
        index="date"
        yAxisWidth={75}
        categories={['views']}
        colors={['indigo']}
        valueFormatter={valueFormatter}
      />
    </>
  );
}