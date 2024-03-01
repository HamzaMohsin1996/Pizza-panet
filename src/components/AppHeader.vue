<template>
    <header>
        <h1 class="site_title">
            <RouterLink :to="{name: 'homeLink'}">~ Pizza Planet ~</RouterLink>
        </h1>
        <nav>
            <router-link :to="{name: 'homeLink'}" class="link">Home</router-link>
            <router-link :to="{name: 'aboutLink'}" class="link">About</router-link>
            <router-link :to="{name: 'adminLink'}" class="link">Admin View</router-link>
            <router-link :to="{name: 'menuLink'}" class="link">Menu View</router-link>
        </nav>
        <h2>The #1 place for pizza</h2>
    </header>
</template>
<style scoped>
.site_title{
    font-size: 3.6rem;
    color: aliceblue;
    transform: rotate(-8deg);
    margin-bottom: 2rem;
}
header{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    color: aliceblue;
    background: url('../assets/images/main-bg.jpg') no-repeat;
    height: 650px;
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 3px rgb(20,20,20);
}
h2{
    margin: 2rem 0;
    color: antiquewhite;
    font-size: 2rem;
}
</style>