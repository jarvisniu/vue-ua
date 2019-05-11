// vue-ua: Vue plugin to detect web environment by user agent
import ua from '@jarvisniu/ua'

function install (Vue, extend) {
  if (typeof extend === 'function') extend.call(ua, ua)
  Vue.prototype.$ua = ua
}

export default {
  install,
}
