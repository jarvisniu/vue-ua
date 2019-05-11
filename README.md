# vue-ua

Vue plugin to detect web environment by user agent

## Usage

Install:

```bash
npm install @jarvisniu/vue-ua
```

Import:

```js
import Vue from 'vue'
import VueUA from '@jarvisniu/vue-ua'

// Simple usage
Vue.use(VueUA)

// With extending
Vue.use(VueUA, function (ua) {
  ua.isOpera = ua.value.includes('OPR/')
})
```

Use in template:

```html
<div v-if="$ua.isWindows">This is Windows</div>
```

Use in script:

```js
this.$ua.isWindows
// or
Vue.prototype.$ua.isWindows
```

## API

- OS
  - isWindows
  - isMacOS
  - isLinux
- Kernel
  - isChrome
  - isFirefox
  - isSafari
  - isEdge
  - isIE
- Platform
  - isElectron
- In-App
  - isWechat
  - isAlipay

## License

MIT
