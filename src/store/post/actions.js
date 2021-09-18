import { postClient } from '../../lib/http'

export default {
    async fetchPosts({ commit }) {
    const posts = await postClient.get('/posts')
    console.log(posts.data);
        commit('getPosts', posts.data);
    },

    async singlePost({commit},id){
        const posts = await postClient.get(`/posts/${id}`)
        console.log(posts.data);
        commit('getPost', posts.data);
    },
    
    
}