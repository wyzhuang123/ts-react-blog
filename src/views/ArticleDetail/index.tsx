import React, {useEffect, useState, useRef} from 'react'
import {withRouter} from 'react-router-dom'
import List from '@/components/Comment/List'
import Skeleton from '@/components/Skeleton'
import RouteInterface from '@/lib/Interface/RouteInterface'
import Editor from 'for-editor'
import { getArticleById } from '@/api/article'
import { connect } from 'react-redux'
import { titleAction } from '@/store/action/title'
// import { Skeleton } from 'antd'
import './index.scss'

interface NowInterface extends RouteInterface {
  match: {
    params: {
      id: string
    }
  },
  Title: Function,
  titleGET: Function
}
interface Article {
  id: string,
  title: string,
  time: string,
  content: string,
  type: string,
  comment?: [] | null 
}


// 骨架层
// const Skel: React.FC = () => {
//   return 
//  (
//     <>
//       <Skeleton active />
//     </>
//   )
// }

let editor = null;
let titlePageData: any = [];
const Index: React.FC<NowInterface> = (props) => {
  let [article, setArticle] = useState<Article>({id: '', title: '', time: '', content: '', type: ''});  
  let [editorState, setEditorState] = useState<string>('');
  let content = useRef(null);
  async function initArticleData() {
    try { 
      let { data } = await getArticleById(props.match.params.id);
      setArticle(data);
      setEditorState(data.content);
      console.log(content.current);
      let h1 = document.getElementsByTagName('h4');
      for(let i = 0; i < h1.length; i++) {
        titlePageData.push({
          data: h1[i].innerText,
          height: h1[i].offsetTop
        })
      }
      
      console.log(titlePageData);
      props.titleGET(titlePageData);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    initArticleData();
  }, [])

  if(!editorState) { 
    return (
          <Skeleton 
            SkeletonParagraphProps={{rows: 5}}
            SkeletonTitleProps={{width: 0}}
          />
    )} else {
      return (
        <div>
          <div className="ar-content-box">
            <div className="ar-title">
              <h1>{ article.title }</h1>
            </div>
            <div className="ar-message">
              <span>{ article.type }</span>
              <span>{ article.time }</span>
            </div>
            <div className="ar-content"  ref={content}>
                <Editor 
                  value={editorState}
                  toolbar={{}}
                  preview={true}
                />
            </div>
          </div>
          <div>
            <List id={props.match.params.id}/>
          </div>
        </div>
      )
    }
  }

export default connect(
  (state: {title: []}) => ({
    Title: state.title
  }),
  {
    'titleGET': titleAction
  }
)(withRouter(Index))