<template>
    <div>

        <div class="holder row">
            <div class="spost col-4">
                <div class="title">
                <h3>{{this.post.title}}</h3>
                <hr>
                </div>
                <div class="spost-body">
                    {{this.post.body}}
                    <hr>
                </div>
                <div class="action">
                    <button type="button" class="primary" @click="goToCreatePost(post.id)">Edit Post</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'SinglePost',
    data: () => ({
        data:[],
        title:null,
        body: null,
        id:null
        
    }),
   mounted() {
    this.$store.dispatch('singlePost',this.$route.params.id)
    console.log('post', this.post)
  },
  computed: {
    post() {
      return this.$store.getters.getPost;
    },
  },
  methods: {
      goToCreatePost(id){
            this.$router.push(`/edit-post/${id}`);
        }
  }
}
</script>

<style>
.spost
{
    display: flex;
    width: 500px;
    flex-direction: column;
    height: auto;
    border-radius: 16px;
    box-shadow: 1px 1px 5px #CCC;
    margin: 10px auto;
    padding: 10px;
}
</style>