"use client";
import { useState, useEffect } from "react";
import { channelList } from "@/components/data";
import Link from "next/link";
export default function Home() {
  const [channelData, setChannelData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    for (let channel of channelList) {
      const response = await fetch(
        `https://raw.githubusercontent.com/surajk95/wizbizniz-data/main/${channel}.json`
      );
      //what if channel isn't found? handle!
      const result = await response.json();
      console.log(`zzz result`, result);
      setChannelData((i) => ({
        ...i,
        [channel]: result,
      }));
    }
  };

  return (
    <main className="flex min-h-screen w-full">
      <div className="z-10 flex max-w-5xl w-full font-sans text-sm">
        <div className="flex flex-col">
          <header className="text-4xl">wizbizniz</header>
          <Link href="/">Home</Link>
          {
            channelData && Object.keys(channelData).map((channel) => {
              const data = channelData?.[channel]?.meta
              return (
                <Link key={data?.channel_handle} href={data?.channel_handle}>{data?.channel_name}</Link>
              )
            })
          }
        </div>
        {channelData && (
          <div className=" flex-row items-center justify-center p-24">
            <h3>Channels</h3>
            {Object.keys(channelData).map((channel) => {
              const data = channelData?.[channel];
              return (
                <div key={channel} className="mt-10">
                  {data?.meta && (
                    <div>
                      {Object.keys(data?.meta).map((key) => (
                        <div key={String(key)}>
                          <b>{key}</b>: {data?.meta[key]}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {channelData?.meta && (
          <div>
            {Object.keys(channelData?.meta).map((key) => (
              <div key={String(key)}>
                <b>{key}</b>: {channelData?.meta[key]}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
