
//INSPECT METHOD
//initial browser command for getting videos:
Array.from(document.querySelectorAll('#video-title-link'))
.map(i => ({link: i.href.split('&')[0], aria: i.getAttribute('aria-label')}))


//can scroll till end by detecting network response OR simple settimeout for 5 secs, then proceed
//to next step when scrollheight is same as before scrolling
//const nodes = Array.from(document.querySelectorAll('#content'))
//const titles = Array.from(document.querySelectorAll('#video-title')).map(i => i.innerHTML)
// const viewsRaw = Array.from(document.querySelectorAll('#metadata-line')).map(i => i.querySelector(':nth-child(3)').innerHTML)
const links = Array.from(document.querySelectorAll('#video-title-link')).map(i => i.href.split('&')[0])
//aria label gives: title, time, duration, views after regex
const ariaLabels = Array.from(document.querySelectorAll('#video-title-link')).map(i => i.getAttribute('aria-label'))
//extract title, time, duration, views by regex

//API METHOD
use /browse api for fetching VideoColorSpace, process them

//extension:
//detect when a new /browse request is made, append to results -- check if first request or subsequent


//for videos
//when obj contains all contents (30 per iteration) of response from '/browse'
obj
.slice(0, obj.length-1)
.map(i => i.richItemRenderer.content.videoRenderer)
.map(i => ({
    title: i.title.runs[0].text,
    videoId: i.videoId,
    viewCountText: i.viewCountText.simpleText,
    description: i.descriptionSnippet.runs[0].text,
    duration: i.lengthText.simpleText,
    time: i.publishedTimeText.simpleText,
    }))


//for creator info
