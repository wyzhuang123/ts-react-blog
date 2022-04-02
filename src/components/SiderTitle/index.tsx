import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import './index.scss'
import RouterInterFace from '@/lib/Interface/RouteInterface'
interface TitleParams extends RouterInterFace{
  Title: any
}

interface TitleI {
  data: string,
  height: number
}



const Index: React.FC<TitleParams> = (props) => {

  function ClickTitle(height: number) {
    // 点击标题跳动页面到对应标题
    document.documentElement.scrollTop = height;    
  }
  console.log(RegExp(/article/g).test(props.location.pathname));
  if(RegExp(/article/g).test(props.location.pathname)) {
    return (
      <div className="sider-title-box">
        <div className="title-box">
          {
            props.Title.map((item: TitleI) => {
              return <p key={item.height} onClick={ () => {ClickTitle(item.height)} }>{ item.data }</p>
            })
          }
        </div>
  
      </div>
    )
  } else {
    return null;
  }

  }

export default connect(
  (state: {title: []}) => ({
    Title: state.title
  })
)(withRouter(Index))