"use client";
import { useState, useEffect } from "react";
import { channelList } from "@/components/data";
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
      const result = await response.json();
      console.log(`zzz result`, result);
      setChannelData((i) => ({
        ...i,
        [channel]: result,
      }));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full font-sans text-sm">
        <header className="text-4xl">wizbizniz</header>
        <h3>Channels</h3>
        {channelData && (
          <div>
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
