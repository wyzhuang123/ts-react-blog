import request from '@/utils/request'

const getArticleComment = (id: string) => {
  return request({
    method: 'get',
    url: `/getArticleComment`,
    params: {
      ac_id: id
    }
  })
}



export {
  getArticleComment
}