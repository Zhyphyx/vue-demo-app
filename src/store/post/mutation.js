export default {
    addPost(state, paylaod) {
        state.post = state.post.push(paylaod)
    },
    editPost(state, payload) {
        const posts = state.post.map(data => {
            if (data.id == payload.id) {
                return {
                    ...payload
                }
            }
            return data;
        })
        state.posts = posts
    },
    deletePost(state, id) {
        const posts = state.post.filter(data => data.id != id);
        state.posts = posts
    },
    getPosts(state, payload) {
        state.posts = payload
    },

    getPost(state, payload){
        state.post = payload
    }
}