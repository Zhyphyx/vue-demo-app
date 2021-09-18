<template>
    <div class="createPost">
        <div class="create">
            <form action="">
            <div class="create-title">
                <input type="text" name="title" id="title" class="txt" v-model="this.post.title" placeholder="
                Title">
            </div>
            <div class="create-body">
                <textarea type="text" v-model="this.post.body" name="body" id="body" class="txt txt-a" placeholder="Content">
                    
                </textarea>
            </div>
            
            <div class="create-button">
                <button type="submit" class="primary create-btn">Save Post</button>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name:'EditPost',
    data: () => ({
        todos: [],
        title: null,
        body:null,
        id: null,
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
}
</script>

<style>

body
{
    font-family:cursive;
}

.create
{
    margin:0;
    position:absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
}
.create-title, .create-body, .create-button
{
    padding:10px
}

.txt
{
    padding:5px 15px;
    width: 93%;
}

.txt-a
{
    height: 200px;
}

.create-btn
{
    width:100%;
    margin: 5px auto;
}
</style>