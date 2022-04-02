import React from 'react'
import { COMMENTREPLIES } from '@/lib/Interface/CommentInterface'
import './index.scss'
const Index: React.FC<COMMENTREPLIES> = (props) => {
    return (
      <div className="reply-container">
        <div className="reply-author">
          <span>{ props.author }</span>
        </div>
        <div className="reply-content">
          <p>{ props.content }</p>
        </div>

      </div>
    )
 

  }

export default Index