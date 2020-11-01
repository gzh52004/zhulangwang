import axios from 'axios';

const baseUrl ='http://47.98.51.123:2000'

const request=axios.create({
    baseURL:baseUrl + '/'
})

export default request;