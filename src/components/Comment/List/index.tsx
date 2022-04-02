import React, { useState, useEffect } from 'react'
import Item from '@/components/Comment/Item'
import { getArticleComment } from '@/api/comment'
import {COMMENT} from '@/lib/Interface/CommentInterface'
import './index.scss'
interface C_ID{
  id: string
}

const Index: React.FC<C_ID> = ({id}) => {
  let [articleComments, setArticleComments] = useState<COMMENT[]>();
  async function initCommentData() {
    const  { data }  = await getArticleComment(id);
    setArticleComments(data);
  }
  useEffect(() => {
    initCommentData();
  }, [])
  return (
    <div className="comment-list-container">
      <p className="title">评论</p>
      {
        articleComments?.map((comment) => {
          return <Item {...comment} key={ comment.c_id }/>
        })
      }
    </div>
  )
  }

export default Index