export const valueFormatter = function (number) {
    return new Intl.NumberFormat('us').format(number).toString();
  };

export function extractChannelFeatures(data = []) {
    let totalViews = 0,
    averageViews = 0,
    totalDuration = 0,
    averageDuration = 0,
    mostPopular = null

    for (let item of data) {
        const views = item.views
        totalViews += views
        totalDuration += parseInt(item.duration)
        if (!mostPopular || views > mostPopular?.views ) {
            mostPopular  = item
        }
    }

    averageViews = Math.round(totalViews / data.length)
    averageDuration = Math.round(totalDuration / data.length) + 'sec'

    return {
        totalViews,
        averageViews,
        averageDuration,
        mostPopular,
        totalVideos: data.length,
    }
}

export function viewsByYear(data = []) {
    const processedData = {}
 for(let video of data) {
    const year = new Date(video?.date).getFullYear()
    processedData[year] = {
        views: (processedData[year]?.views || 0) + video?.views,
        videos: (processedData[year]?.videos || 0) + 1,
    }
 }
 const output = []
 for(let [key, value] of Object.entries(processedData)) {
    output.push({
        date: key,
        "Total views": value.views,
        "Average views": Math.round(value.views/value.videos),
        "videos": value.videos,
    })
 }
 return output
}

export function extractGlobalFeatures(data = {}) {
    const output = []
    for(let key of Object.keys(data)) {
        const channel = data[key]
        output.push({
            name: channel?.meta?.channel_name,
            subscribers: channel?.meta?.subscriber_count,
            href: `https://youtube.com/${channel?.meta?.channel_handle}`,
            ...extractChannelFeatures(channel?.data),
        })
    }
    console.log(`zzz returning`, output)
    return output
}