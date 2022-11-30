import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import * as actions from "./action";
import mutations from "./mutation";
import { vue } from "laravel-mix";

vue.use(Vuex);

export const store = new Vuex.store({
    mutations,
    actions,
    getters,
});
