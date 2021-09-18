<template>
    <div class="createPost">
        <div class="create">
            <form action="">
            <div class="create-title">
                <input type="text" name="title" id="title" class="txt" v-model="title" placeholder="Title">
            </div>
            <div class="create-body">
                <textarea type="text" name="body" id="body" class="txt txt-a" v-model="body" placeholder="Content"></textarea>
            </div>
            
            <div class="create-button">
                <button type="submit" class="primary create-btn">Add Post</button>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name:'CreatePost',
    data: () => ({
        todos: [],
        title: null,
        body:null,
        id: null,
    }),
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
    font-family: cursive;
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