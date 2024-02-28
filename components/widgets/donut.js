import { valueFormatter } from "@/app/utils";
import { DonutChart } from "@tremor/react";

export default function DonutWidget({ title, data, category }) {
  return (
    <div className="space-y-3">
      <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">{title}</h3>
      <div className="flex justify-center">
        <DonutChart
          data={data}
          variant="donut"
          valueFormatter={valueFormatter}
        />
      </div>
    </div>
  );
}
