import { valueFormatter } from '@/app/utils';
import { BarList } from '@tremor/react';


export default function BarListWidget({ title, data, category }) {
  return (
    <>
      <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">{title}</h3>
      <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
        <span>Channel</span>
        <span>{category}</span>
      </p>
      <BarList data={data} className="mt-2" valueFormatter={valueFormatter}/>
    </>
  );
}