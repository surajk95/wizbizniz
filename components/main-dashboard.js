'use client'
import { useChannelStore } from "@/components/store";

export default function MainDashboard() {
  const channelData = useChannelStore((state) => state.channelData);
  console.log(`zzz main dash`, channelData);
  return (
    <div className="z-10 flex max-w-5xl w-full font-sans text-sm">
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
    </div>
  );
}
