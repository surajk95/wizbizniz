'use client'
import { useChannelStore } from "@/components/store"

export default function Page(props) {
    const slug = String(props.params?.slug).replace('%40', '').toLowerCase()
    const pageData = useChannelStore(state => state.channelData?.[slug])
    console.log(`zzz page`, pageData)
    return (
        <div className="p-12">I'm a page</div>
    )
}