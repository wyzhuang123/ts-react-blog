import React,{ Suspense, useEffect } from 'react'
import { Route, Switch, HashRouter , withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import RouteInterface from '@/lib/Interface/RouteInterface'
import { titleAction } from '@/store/action/title'
import routes from '@/router/index'
import Loading from '@/components/Loading'
import List from '@/components/Article/List'
import '@/lib/CSS/app.scss'
interface NowInterFace extends RouteInterface {
  titleGET: Function,
  Title: Function
}
const Index: React.FC<NowInterFace> = (props) => {
  useEffect(() => {
    props.titleGET([]);
    // console.log(props.Title);
  }, [])
  let { location } = props;
  return (
    <div style={{width: '80%',  marginTop: '46px'}} className="content-container">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="fade"
          exit={false}        
        >
          <HashRouter>
            <Switch>
              <Suspense fallback={<Loading/>}>
                <Route component={List} path="/" exact={true}/>
                {
                  routes.map((route) => {      
                    return (
                      <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                        name={route.name}
                      />
                    )
                  })
                }
              </Suspense>         
            </Switch>
          </HashRouter>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
  }

export default connect(
  (state: {title: []}) => ({
    Title: state.title
  }),
  {
    'titleGET': titleAction
  }
)(withRouter(Index))