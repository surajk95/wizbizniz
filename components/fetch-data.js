'use client'
import { useLayoutEffect } from 'react'
import { useChannelStore } from './store'

export default function FetchData() {
  const channelList = useChannelStore((state) => state.channelList)
  const setChannelData = useChannelStore((state) => state.setChannelData)

  useLayoutEffect(() => {
    console.log(`zzz fetching`, channelList)
    const fetchData = async () => {
      for (let channel of channelList) {
        const response = await fetch(
          `https://raw.githubusercontent.com/surajk95/wizbizniz-data/main/${channel}.json`
        );
        //what if channel isn't found? handle!
        const result = await response.json();
        console.log(`zzz result`, result);
        setChannelData(channel, result);
      }
    }
    fetchData()
  }, [channelList, setChannelData])

  return null
}