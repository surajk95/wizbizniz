'use client'
import { useChannelStore } from "@/components/store"
import Widget from "@/components/widgets/widget"
import { extractChannelFeatures, valueFormatter, viewsByYear } from "../utils"

export default function Page(props) {
    const slug = String(props.params?.slug).replace('%40', '').toLowerCase()
    const pageData = useChannelStore(state => state.channelData?.[slug]) || {}
    console.log(`zzz page`, pageData)
    const { meta, data, lastUpdated } = pageData

    const {
        totalViews,
        averageViews,
        averageDuration,
        mostPopular,
    } = extractChannelFeatures(data)

    return (
        <div className="w-full p-12">
            <h1>{meta?.channel_name}</h1>
            <h2>{meta?.channel_handle}</h2>
            <h3>{meta?.tagline}</h3>
            <h4>Last Updated: {(new Date(lastUpdated).toLocaleDateString('en-US'))}</h4>
            <div className="w-full flex flex-row flex-wrap justify-between">
                <Widget
                    type="metric"
                    width="19%"
                    title="Total subscribers"
                    data={valueFormatter(meta?.subscriber_count)}
                /> 
                <Widget
                    type="metric"
                    width="19%"
                    title="Total views"
                    data={valueFormatter(totalViews)}
                /> 
                <Widget
                    type="metric"
                    width="19%"
                    title="Avg views"
                    data={valueFormatter(averageViews)}
                /> 
                <Widget
                    type="metric"
                    width="19%"
                    title="Videos"
                    data={valueFormatter(meta?.videos_count)}
                />
                <Widget
                    type="metric"
                    width="19%"
                    title="Avg video duration"
                    data={valueFormatter(averageDuration)}
                /> 
                <Widget
                    type="custom"
                    width="100%"
                    title="Most popular video"
                >
                    {mostPopular?.title} 
                </Widget>
                <Widget
                    type="line"
                    width="49%"
                    height="400px"
                    title="Total views"
                    data={viewsByYear(pageData?.data)}
                    categories={['Total views']}
                />
                <Widget
                    type="line"
                    width="49%"
                    height="400px"
                    title="Average views"
                    data={viewsByYear(pageData?.data)}
                    categories={['Average views']}
                />
            </div>
        </div>
    )
}