import { Card } from '@tremor/react';

export default function MetricWidget({ title, data }) {
  return (
    <Card className="mx-auto max-w-md">
      <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {title}
      </h4>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {data}
      </p>
    </Card>
  );
}