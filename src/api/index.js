import axios from 'axios'

const baseURL = 'http://localhost:8888/api/private/v1/'
// 这是给aixos的第一个参数写了一个根路径
axios.defaults.baseURL = baseURL

//axios拦截器
axios.interceptors.request.use(function(config){ 
    let token = localStorage.getItem("mytoken")
    if(token){
        config.headers.Authorization = token}
        return config
    }, function(error){
    return Promise.reject(error) 
 })


export const loginPost = params => axios.post('/login',params).then(res=>res.data)