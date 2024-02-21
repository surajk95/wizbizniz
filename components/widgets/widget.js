import MetricWidget from "./metric"

export default function Widget(props) {
    const {
        type,
        title,
        data,
        width = '100%',
        height = '150px',
        children,
    } = props
    return (
        <div
            className="widget m-2"
            style={{
                flexBasis: width,
                height: height,
            }}
        >
        {
            type === 'metric' &&
            <MetricWidget title={title} data={data} />
        }
        {
            type === 'custom' &&
            <>{children}</>
        }
        </div>
    )
}