
import React from 'react';

interface RouteType{
  name: string,
  path: string,
  component: any,
  exact?: boolean
}

const routes: RouteType[] = [
//  {
//    name: '首页',
//    path: '',
//    component: React.lazy(() => import('@/components/Article/List'))
//  },
 {
   name: '登录',
   path: '/login',
   component: React.lazy(() => import('@/views/Login'))
 },
 {
  name: '文章',
  path: `/article/:id`,
  component: React.lazy(() => import('@/views/ArticleDetail'))
 },
 {
  name: '关于',
  path: '/about',
  component: React.lazy(() => import('@/views/About'))
 }
]
// 导出方法，供遍历使用路由
function generateRouteConfig (route: RouteType[]) {
  return route.map(item => {
    return {
        key: item.path,
        exact: true,
        ...item,
        component: item.component,
        name: item.name
    }
  })
}
export default generateRouteConfig(routes);
// export default routes;