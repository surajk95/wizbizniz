"use client";
import { useChannelStore } from "@/components/store";
import Widget from "./widgets/widget";
import { extractGlobalFeatures } from "@/app/utils";

export default function MainDashboard() {
  const channelData = useChannelStore((state) => state.channelData);
  console.log(`zzz main dash`, channelData);
  return (
    <div className="max-w-5xl w-full p-12 font-sans">
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
          width="47%"
          height="300px"
          title="Channels by subscribers"
          data={extractGlobalFeatures(channelData)}
          category={"Subscribers"}
        />
      </div>
    </div>
  );
}
