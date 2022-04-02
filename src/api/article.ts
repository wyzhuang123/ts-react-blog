import request from '@/utils/request'

const getArticleById = (id: string) => {
    return request({
        method: 'get',
        url: `/getArticleById/${id}`,
    })
}
const getAllArticles = () => {
  return request({
    method: 'get',
    url: 'allArticle'
  })
}


export {
  getArticleById,
  getAllArticles
}