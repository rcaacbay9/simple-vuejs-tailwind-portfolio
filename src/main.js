import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faMoon, faSun, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,faFacebook,faLinkedin,faInstagram,faGithub,faTwitter, faMoon, faSun, faEnvelope)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon) 

app.use(router)
app.mount('#app')
