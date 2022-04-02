import React, {useEffect} from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import { withRouter, useHistory } from 'react-router-dom'
import RouteInterface from '@/lib/Interface/RouteInterface'
import Skeleton from '@/components/Skeleton'
import Editor from 'for-editor'
import './index.scss'

let editor = null;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2963763_p9cwvt2okzo.js'
})

interface AritcleItem {
  id: string,
  title: string,
  time: string,
  content: string,
  type: string
  route: RouteInterface
}

const Index: React.FC<AritcleItem> = (props) => {
  let history = useHistory();
  if(!props) {
    return <Skeleton/>
  } else {
    return (
      <div className="item-container"   onClick={() => history.replace(`/article/${props.id}`)}>
        <div className="item-title">
          <p>{props.title}</p>
        </div>
        <div className="item-messages">
          <div>
            <IconFont type="icon-anjianleixing" />
            <span>{props.type}</span>
          </div>
          <div>
            <IconFont type="icon-timefill" />
            <span>{props.time}</span>
          </div>
        </div>
      </div>
    )
  }
  }

export default withRouter(Index)