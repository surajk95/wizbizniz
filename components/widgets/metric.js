export default function MetricWidget({ title, data }) {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {title}
      </h3>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {data}
      </p>
    </>
  );
}