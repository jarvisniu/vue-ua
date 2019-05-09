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

// simple usage
Vue.use(VueUA)

// with extending
Vue.use(VueUA, function (ua) {
  return {
    isSeehome: ua.includes('Seehome/'),
  }
})
```

Use in template:

```html
<div v-if="$ua.isWindows">This is Windows</div>
```

Use in script:

```js
Vue.prototype.$ua.isWindows
```

## License

MIT
