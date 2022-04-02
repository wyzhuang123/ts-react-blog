import axios from 'axios'


const request = axios.create({
  baseURL: 'http://8.142.131.230:3001'
})


export default request;