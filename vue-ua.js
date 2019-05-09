// vue-ua: Vue plugin to detect web environment by user agent
import ua from '@jarvisniu/ua'

function install (Vue, extend) {
  if (typeof extend === 'function') {
    let extensions = extend.apply(ua, ua)
    if (typeof extensions == 'object') {
      for (let k in extensions) {
        if (ua[k] == null) ua[k] = extensions[k]
      }
    }
  }
  Vue.prototype.$ua = ua
}

export default {
  install,
}
