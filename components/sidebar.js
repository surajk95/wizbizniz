'use client'
import Link from "next/link";
import { useChannelStore } from "@/components/store";

export default function Sidebar() {
  const channelData = useChannelStore((state) => state.channelData);
  console.log(`zzz sidebar`, channelData);
  return (
    <div className="flex flex-col">
      <header className="text-4xl">wizbizniz</header>
      <Link href="/">Home</Link>
      {channelData &&
        Object.keys(channelData).map((channel) => {
          const data = channelData?.[channel]?.meta;
          return (
            <Link key={data?.channel_handle} href={data?.channel_handle}>
              {data?.channel_name}
            </Link>
          );
        })}
    </div>
  );
}
