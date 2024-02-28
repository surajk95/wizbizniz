"use client";
import { useChannelStore } from "@/components/store";
import Widget from "./widgets/widget";
import { extractGlobalFeatures } from "@/app/utils";
import { useMemo } from "react";

export default function MainDashboard() {
  const channelData = useChannelStore((state) => state.channelData);
  const globalFeatures = useMemo(() => extractGlobalFeatures(channelData), [channelData]);
  console.log(`zzz main dash`, channelData, globalFeatures);

  return (
    <div className="max-w-6xl w-full p-12 font-sans">
      {channelData && (
        <div className=" flex-row items-center justify-center p-12">
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
      <div className="w-full flex flex-row flex-wrap justify-between">
        <Widget
          type="bar-list"
          width="32%"
          height="300px"
          title="Subscribers"
          data={extractGlobalFeatures(channelData).map(i => ({...i, value: i.subscribers}))}
          category={"Subscribers"}
        />
        <Widget
          type="bar-list"
          width="32%"
          height="300px"
          title="Total views"
          data={extractGlobalFeatures(channelData).map(i => ({...i, value: i.totalViews}))}
          category={"Views"}
        />
        <Widget
          type="bar-list"
          width="32%"
          height="300px"
          title="Average views"
          data={extractGlobalFeatures(channelData).map(i => ({...i, value: i.averageViews}))}
          category={"Views"}
        />
        <Widget
          type="donut"
          width="49%"
          height="300px"
          title="Videos uploaded"
          data={extractGlobalFeatures(channelData).map(i => ({...i, value: i.totalVideos}))}
        />
                <Widget
          type="donut"
          width="49%"
          height="300px"
          title="Avg video duration (minutes)"
          data={extractGlobalFeatures(channelData).map(i => ({...i, value: parseInt(parseInt(i.averageDuration)/60)}))}
        />
      </div>
    </div>
  );
}
