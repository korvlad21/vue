var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
})
app.message = 'i2';

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
