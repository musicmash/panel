import Vue from 'vue'
import Vuex from 'vuex'
import releases from '@/store/modules/releases'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        releases,
    },
    strict: debug,
})
