import {config} from '../config'
let createAMap = new Promise((resolve, reject) => {
  window.initAMap = () => {
    resolve(window.AMap)
  }
  if (window.AMap) {
    resolve(window.AMap)
  } else {
    let plugins = 'AMap.Driving,AMap.Geocoder,AMap.Walking,AMap.Riding,AMap.Transfer,AMap.Geolocation'
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key=${config.amapKey}&plugin=${plugins}`
    script.onerror = reject
    document.head.appendChild(script)
  }
})
export {createAMap}