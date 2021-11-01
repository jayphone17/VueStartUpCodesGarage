// 请求地址：http://wthrcdn.etouch.cn/weather_mini
// 请求方法：get
// 请求参数：city
// 响应内容：天气信息

// 1.点击回车
// 2.查询数据
// 3.数据渲染

var app = new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[]
    },
    methods: {
        searchWeather(){
            var that = this
            console.log("weather searching")
            //调用接口
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(response){
                // console.log(response.data.data.forecast)
                that.weatherList = response.data.data.forecast
            }).catch(function(err){
                console.log(err)
            })
        },
        changeCity(city){
            this.city = city
            this.searchWeather()
        }
    },
})