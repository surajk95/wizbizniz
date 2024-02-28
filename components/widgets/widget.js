import { Card } from "@tremor/react"
import MetricWidget from "./metric"
import LineWidget from "./line"

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
        <Card
            className="widget m-2"
            style={{
                flexBasis: width,
                height,
            }}
        >
        {
            type === 'metric' &&
            <MetricWidget title={title} data={data} />
        }
        {
            type === 'line' &&
            <LineWidget title={title} data={data} />
        }
        {
            type === 'custom' &&
            <>
                {title}
                <br/>
                {children}
            </>
        }
        </Card>
    )
}