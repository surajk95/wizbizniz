export function extractFeatures(data = []) {
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
    }
}

export function viewsByYear(data = []) {
    const processedData = {}
 for(let video of data) {
    const year = new Date(video?.date).getFullYear()
    processedData[year] = (processedData[year] || 0) + video?.views
 }
 const output = []
 for(let [key, value] of Object.entries(processedData)) {
    output.push({
        date: key,
        views: value,
    })
 }
 console.log(`zzz returning`, output)
 return output
}