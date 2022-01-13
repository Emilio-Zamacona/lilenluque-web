import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExternalLinkAlt)
library.add(faChevronRight)
library.add(faTimes)

Vue.component('FaIcon', FontAwesomeIcon)
