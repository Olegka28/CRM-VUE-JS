import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import messagePlugin from "./utils/message.plugin";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import Loader from "./components//app/Loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

const firebaseConfig = {
  apiKey: "AIzaSyBKwfxwDDzDwsz6eNf3J1mBhYCYwsnUdXY",
  authDomain: "vue-project-a10ba.firebaseapp.com",
  databaseURL: "https://vue-project-a10ba.firebaseio.com",
  projectId: "vue-project-a10ba",
  storageBucket: "vue-project-a10ba.appspot.com",
  messagingSenderId: "668652897422",
  appId: "1:668652897422:web:6910e570093b33d1bcf5df",
  measurementId: "G-R8JF2RNXWY"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
