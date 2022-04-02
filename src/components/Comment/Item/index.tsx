import React, { useEffect, useState } from 'react'
import Reply from '@/components/Comment/Reply'
import { COMMENT, COMMENTREPLIES } from '@/lib/Interface/CommentInterface'
import { getArticleComment } from '@/api/reply'
import './index.scss'

const Index: React.FC<COMMENT> = (props) => {
  let [CommentReplies, setCommentReplies] = useState<COMMENTREPLIES[]>();
  async function initData() {
    let { data } = await getArticleComment(props.c_id);
    setCommentReplies(data);
  }
  useEffect(() => {
    initData();
  }, [])
  return (
    <div>
      <div className="comment-item">
        <div className="comment-message">
         <span>{ props.author }</span><span>{ props.time }</span>
        </div>
        <div className="comment-content">
          <p>{ props.content }</p>
        </div>
        <div className="comment-replies">
          <div style={{backgroundColor: 'rgb(249, 250, 251)'}}>
          {
            CommentReplies?.map((reply) => {
              return  (
                          <Reply {...reply} key={reply.r_id}/>
              )
                
            })
          }
           <div className="more-replies">查看更多回复</div>
          </div>

        </div>
      </div>
    </div>
  )
  }

export default Index