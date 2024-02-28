import { Card } from "@tremor/react"
import MetricWidget from "./metric"
import LineWidget from "./line"
import BarListWidget from "./bar-list"

export default function Widget(props) {
    const {
        type,
        title,
        data,
        width = '100%',
        height = '150px',
        children,
        ...rest
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
            <MetricWidget title={title} data={data} {...rest} />
        }
        {
            type === 'line' &&
            <LineWidget title={title} data={data} {...rest} />
        }
        {
            type === 'bar-list' &&
            <BarListWidget title={title} data={data} {...rest} />
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