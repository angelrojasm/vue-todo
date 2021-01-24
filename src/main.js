
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck,faTrash } from '@fortawesome/free-solid-svg-icons'


library.add(faCheck)
library.add(faTrash)



createApp(App).mount('#app')
