import VueRouter from 'vue-router'
import Login from '../pages/login'
import Home from '../pages/home'
import SinglePost from '../pages/singlePost'
import CreatePost from '../pages/createPost'
import EditPost from '../pages/editPost'

const routes = [{
    path:'/',
    component:Login,
    name:'Login'
},
{
    path:'/home',
    component:Home,
    name:'Home'
},
{
    path:'/single-post/:id',
    component:SinglePost,
    name:'SinglePost'
},
{
    path:'/edit-post/:id',
    component:EditPost,
    name:'EditPost'
},
{
    path:'/create-post',
    component:CreatePost,
    name:'CreatePost'
}
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router