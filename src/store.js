import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        name:""
    },
    mutations:{
        name(state,info){
            state.name = info
        }
    }
})
export default store