'use client'
import { useChannelStore } from "@/components/store"
import Widget from "@/components/widgets/widget"
import { extractFeatures, viewsByYear } from "../utils"

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
    } = extractFeatures(data)

    return (
        <div className="w-full p-12">
            <h1>{meta?.channel_name}</h1>
            <h2>{meta?.channel_handle}</h2>
            <h3>{meta?.tagline}</h3>
            <h4>Last Updated: {(new Date(lastUpdated).toLocaleDateString('en-US'))}</h4>
            <div className="w-full flex flex-row flex-wrap">
                <Widget
                    type="metric"
                    width="17%"
                    title="Total subscribers"
                    data={meta?.subscriber_count}
                /> 
                <Widget
                    type="metric"
                    width="17%"
                    title="Total views"
                    data={totalViews}
                /> 
                <Widget
                    type="metric"
                    width="17%"
                    title="Avg views"
                    data={averageViews}
                /> 
                <Widget
                    type="metric"
                    width="17%"
                    title="Videos"
                    data={meta?.videos_count}
                />
                <Widget
                    type="metric"
                    width="17%"
                    title="Average video length"
                    data={averageDuration}
                /> 
                <Widget
                    type="custom"
                    width="100%"
                    title="Most popular video"
                    data={averageDuration}
                >
                    {mostPopular?.title} 
                </Widget>
                <Widget
                    type="line"
                    width="50%"
                    height="400px"
                    title="Total views"
                    data={viewsByYear(pageData?.data)}
                />
            </div>
        </div>
    )
}