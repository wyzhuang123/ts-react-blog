import React from 'react'
import { Menu } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import './index.scss'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_022pe4mwl481.js'
})

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
    title: '关于',
    path: '/about',
    icon: 'guanyu1'
  },
  {
    title: '评论',
    path: '/comment',
    icon: 'pinglun'
  },
  {
    title: '登录',
    path: '/login',
    icon: 'denglu'
  },

];



const Index: React.FC = () => {
  return (
    <div>
        <Menu
          mode="horizontal"
          style={{justifyContent:'flex-end'}}
        >
          <Menu.Item className="slogan">
            Ts-React-Blog
          </Menu.Item>
            {
              HeaderData.map((item) => {
                return <Menu.Item key={item.path} icon={<IconFont type={'icon-' + item.icon} />}>
                        {item.title} 
                      </Menu.Item> 
              })
            }  
        </Menu>
    </div>
  )
  }

export default Index