import { valueFormatter } from '@/app/utils';
import { LineChart } from '@tremor/react';


export default function LineWidget({ title, data, categories }) {
  return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">{title}</h3>
      <LineChart
        className="mt-4"
        data={data}
        index="date"
        yAxisWidth={75}
        categories={categories}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
  );
}