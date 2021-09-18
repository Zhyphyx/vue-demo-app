<template>
    <div class="body">
        <form @submit="goToHome">
            <div class="login">
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" v-model="username">
            </div>
            <div class="password">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" v-model="password">
            </div>
            <div class="btn">
                <button>Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'Login',
    data: () => ({
        username:null,
        password:null
    }),
    methods:{
        goToHome(evt){
            evt.preventDefault();
            this.$router.push("/home");
        }
    }
}
</script>

<style>

.body
{
    margin:0;
    position:absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.login, .password
{
    padding: 6px 0;
}

</style>