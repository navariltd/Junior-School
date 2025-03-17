import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { FrappeUI, setConfig, frappeRequest, pageMetaPlugin, Button} from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(FrappeUI)
app.use(pageMetaPlugin)
app.component("Button", Button)



app.mount('#app')
