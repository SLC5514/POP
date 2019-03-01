import Vue from 'vue'
import { Menu, MenuItem, locale, Page } from 'iview'
import lang from 'iview/dist/locale/en-US'

locale(lang);

Vue.component('Page', Page)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)

import 'iview/dist/styles/iview.css'
import '../my-theme/index.less';