<template>
    <div>
        <h1>Criando rotas com vue</h1>
        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World</router-link> |
            <router-link :to="{ name: 'blog' }">Meu blog </router-link> |
            <router-link :to="{ name: 'users.index' }">Users</router-link>

        </p>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
export default {
    name: "App",
    components: {}

}
</script>

<style scoped>

</style>
