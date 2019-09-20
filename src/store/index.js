import Vuex from "vuex";
import vue from "vue";

import todos from "./modules/todos";

vue.use(Vuex);

// create store
export default new Vuex.Store({
        modules:{
            todos
        }
})