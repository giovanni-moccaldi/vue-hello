console.log("ok", Vue);
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
});


app.mount("#root");