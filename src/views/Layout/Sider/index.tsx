import React, { useEffect } from 'react'
import { createFromIconfontCN, 
        GithubOutlined,
        QqOutlined,
        WeiboCircleOutlined,
        WechatOutlined
 } from '@ant-design/icons'
import SiderTitle from '@/components/SiderTitle'
import RouterInterFace from '@/lib/Interface/RouteInterface'
import {withRouter} from 'react-router-dom'
import './index.scss'


const Index: React.FC<RouterInterFace> = (props) => {
  const GoTo = (url: string) => {
    window.open(url);
  }
  useEffect(() => {
  }, [])
  return (
      <div style={{width: '10%'}}>
        <div className="sider-box">
          <div className="sider-p">
            <p>来自GDUT,一个前端菜鸡
              爱勇士，爱折腾
            </p>
          </div>
          <div className="mine-ways">
            <div>
              <a onClick={() => {GoTo('https://github.com/wyzhuang123')}}>
                <GithubOutlined />
              </a>
            <span className="mine-span">Github</span>
            </div>
            <div>
              <a onClick={() => {GoTo('https://weibo.com/u/5164249747')}}>
                <WeiboCircleOutlined />
              </a>
              <span className="mine-span">Weibo</span>
            </div>
            <div>
              <a href="">
                <QqOutlined />
              </a>

              <span className="mine-span">QQ</span>
            </div>
            <div>
              <a href="">
                <WechatOutlined />  
              </a>

              <span className="mine-span">Wechat</span>
            </div>
          </div>
        </div>
        <SiderTitle/>
      </div>

  )
  }

export default withRouter(Index)