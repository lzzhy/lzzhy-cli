<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
<style>
html {
    /* 获取整个屏幕大小 */
    height: 100vh;  
}
body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
