import Vue from 'vue'
import TQSDK from 'tqsdk'

const tqsdk = new TQSDK()

const NOOP = () => {}
const tqVmEventMap = {}
const tqsdkRE = /^tqsdk:/

function mixinEvents (Vue) {
  const on = Vue.prototype.$on
  const emit = Vue.prototype.$emit
  console.log(emit)
  Vue.prototype.$on = function proxyOn (eventName, fn = NOOP) {
    const vm = this
    if (Array.isArray(eventName)) {
      eventName.forEach((item) => vm.$on(item, fn))
    } else if (tqsdkRE.test(eventName)) {
      if (!tqVmEventMap[vm._uid]) tqVmEventMap[vm._uid] = {}
      const tqEventName = eventName.match(/^tqsdk:(.*)/)[1]
      if (!tqVmEventMap[vm._uid][tqEventName]) tqVmEventMap[vm._uid][tqEventName] = []
      tqVmEventMap[vm._uid][tqEventName].push(fn)
      tqsdk.on(tqEventName, fn.bind(vm))
    } else {
      on.call(vm, eventName, fn)
    }
    return vm
  }
}

function applyMixin (Vue) {
  Vue.mixin({
    beforeDestroy () {
      const vm = this
      const tqevents = tqVmEventMap[vm._uid] || {}
      for (const eventName in tqevents) {
        const eventsArr = tqevents[eventName]
        eventsArr.forEach((fn) => {
          tqsdk.removeEventListener(eventName, fn)
        })
      }
      delete tqVmEventMap[vm._uid]
    }
  })
}

function plugin (Vue) {
  // if (VERSION < 2) {
  //   console.error('[vue-event-proxy] only support Vue 2.0+')
  //   return
  // }
  // Exit if the plugin has already been installed.
  if (plugin.installed) return
  plugin.installed = true
  mixinEvents(Vue)
  applyMixin(Vue)
}

Vue.use(plugin)

Vue.$tqsdk = tqsdk
Vue.prototype.$tqsdk = tqsdk
export default tqsdk
