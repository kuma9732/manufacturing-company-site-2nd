<template>
  <div class="hello">
    <router-link to="/">Home</router-link>
    <router-link to="/products">製品情報</router-link>
    <router-link to="/company">会社情報</router-link>
    <router-link to="/ir">IR情報</router-link>
    <router-link to="/recruit">採用情報</router-link>
    <router-link to="/contact">お問い合わせ</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
