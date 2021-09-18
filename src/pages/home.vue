<template>
    <div>
        <div class="holder">
            <div class="post" v-for="(post,index) in posts" :key="index">
                <div class="title">
                <!-- {{post.id}} -->
                <h3>{{post.title}}</h3>
                <hr>
                </div>
                <div class="post-body">
                    {{post.body}}
                    <hr>
                </div>
                <div class="action">
                    <button type="button" class="primary" @click="goToSinglePage(post.id)">View Post</button>
                    <button type="button" class="secondary delete">Delete Post</button>
                </div>
            </div>
        </div>
        
        
        <!-- <table>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        <tr v-for="(post,index) in posts" :key="index">
            <td>{{post.id}}</td>
            <td><a :href="`single-post/${post.id}`">{{post.title}}</a></td>
            <td>{{post.body}}</td>
            <td><button type="button" @click="deletePost(post.id)">Delete</button></td>
        </tr>

        </table> -->
    </div>
</template>

<script>
export default {
    name:'Home',
    data: () => ({
        data:[],
        title:null,
        body: null,
        id:null
    }),
   mounted() {
    this.$store.dispatch('fetchPosts')
    // console.log(this.posts)
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  },
  methods: {
      goToSinglePage(id){
            this.$router.push(`/single-post/${id}`);
        }
  }
}
</script>

<style>
.title, .post-body
{
    padding: 5px;
}

.title
{
    text-transform: capitalize;
}
.post
{
    display: inline-block;
    flex-direction: column;
    height: auto;
    border-radius: 16px;
    box-shadow: 1px 1px 5px #CCC;
    margin: 10px 20px;
    padding: 10px;
}

.primary, .secondary
{
    padding: 5px 10px;
    border:none;
    outline: none;
    border-radius: 16px;
    margin: 0px 6px;
}

.primary:hover, .secondary:hover
{
    cursor: pointer;
}

.primary
{
    background:blue;
    color:#FFF
}
.delete
{
    background:#FFF;
    color:#000;
    border: 1px solid;
}
</style>