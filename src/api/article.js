import request from '../utils/request'


 const ArticleList = () => {
  return request({
    method: 'GET',
    baseURL:'http:/localhost:3001/',
    url: '/allArticle',
  })
}


export {
  ArticleList
}