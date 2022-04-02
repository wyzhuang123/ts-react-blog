import request from '@/utils/request'

const getArticleComment = (id: string) => {
  return request({
    method: 'get',
    url: `/findCommentReplies`,
    params: {
      cc_id: id
    }
  })
}


export {
  getArticleComment
}