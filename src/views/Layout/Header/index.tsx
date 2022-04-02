import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import RouterInterface from '@/lib/Interface/RouteInterface'
import './index.scss'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_022pe4mwl481.js'
})

// 导航栏数据
interface HData {
  title: string,
  path: string,
  icon: string
}

const HeaderData: HData[] = [
  {
    title: '首页',
    path: '/',
    icon: 'home'
  },
  {
    title: '评论',
    path: '/comment',
    icon: 'pinglun'
  },  
  {
    title: '关于',
    path: '/about',
    icon: 'guanyu1'
  },
];



const Index: React.FC<RouterInterface> = (props) => {
  useEffect(() => {
  }, [])
  let { history } = props;
  return (
    <div style={{position: 'fixed', top: '0px' ,left: '0', right: '0'}}>
        <Menu
          mode="horizontal"
          style={{justifyContent:'flex-end'}}
        >
          <Menu.Item className="slogan" key="slogan">
            开开的博客
          </Menu.Item>
            {
              HeaderData.map((item) => {
                return <Menu.Item 
                          key={item.path} 
                          icon={<IconFont type={'icon-' + item.icon} />}
                          onClick={() => history.replace(item.path)}
                       >
                        {item.title} 
                      </Menu.Item> 
              })
            }  
        </Menu>
    </div>
  )
  }

export default withRouter(Index)