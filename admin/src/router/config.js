import Home from '@/views/home/Home.vue';
import Center from '@/views/center/Center.vue';

import UserAdd from '@/views/user-manage/UserAdd.vue';
import UserList from '@/views/user-manage/UserList.vue';

import NewsAdd from '@/views/news-manage/NewsAdd.vue';
import NewsList from '@/views/news-manage/NewsList.vue';
import NewsEdit from '@/views/news-manage/NewsEdit.vue';

import ProductAdd from '@/views/product-manage/ProductAdd.vue';
import ProductList from '@/views/product-manage/ProductList.vue';
import ProductEdit from '../views/product-manage/ProductEdit.vue'

const routesConfig = [
  {
    path: '/index',
    component: Home
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/user-manage/useradd',
    component: UserAdd,
    requireAdmin: true
  },
  {
    path: '/user-manage/userlist',
    component: UserList,
    requireAdmin: true
  },
  {
    path: '/news-manage/newsadd',
    component: NewsAdd
  },
  {
    path: '/news-manage/newslist',
    component: NewsList
  },
  {
    path: '/news-manage/editnews/:id',
    component: NewsEdit
  },
  {
    path: '/product-manage/productadd',
    component: ProductAdd
  },
  {
    path: '/product-manage/productlist',
    component: ProductList
  },
  {
    path:"/product-manage/editproduct/:id",
    component:ProductEdit
  },
  //重定向
  {
    path: '/',
    redirect: '/index'
  }
]
export default routesConfig