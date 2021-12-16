import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import './index.scss'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_p9cwvt2okzo.js'
})
interface AritcleItem {
  title: string,
  time: string,
  content: string,
  type: string
}


const Index: React.FC = () => {
  return (
    <div className="item-container">
      <div className="item-message">
        <div>
          <IconFont type="icon-user" />
          <span>黄凯</span>
        </div>
        <div>
          <IconFont type="icon-anjianleixing" />
          <span>黄凯</span>
        </div>
        <div>
          <IconFont type="icon-timefill" />
          <span>黄凯</span>
        </div>
      </div>
      <div>
        <p>sadasdasdasdasd</p>
      </div>
    </div>
  )
  }

export default Index