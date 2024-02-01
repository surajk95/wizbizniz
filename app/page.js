'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [channelData, setChannelData] = useState(null)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://raw.githubusercontent.com/surajk95/wizbizniz-data/main/channel5youtube.json')
    const result = await response.json()
    console.log(`zzz result`, result)
    setChannelData(result)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full font-sans text-sm">
        <header className="text-4xl">wizbizniz</header>
        {
          channelData?.meta &&
          <div>
            {
              Object.keys(channelData?.meta).map(key => (
                <div key={String(key)}>
                  <b>{key}</b>: {channelData?.meta[key]}
                </div>
              ))
            }
          </div>
        }
      </div>
    </main>
  );
}
