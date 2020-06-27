<template>
  <div class="deskTop-nav">
    <div class="nav-name">
      <h1>セラコン株式会社</h1>
    </div>
    <div class="nav-menu">
      <ul class="nav-list">
        <li class="nav-list-item"><router-link to="/">Home</router-link></li>
        <li class="nav-list-item"><router-link to="/products">製品情報</router-link></li>
        <li class="nav-list-item"><router-link to="/company">会社情報</router-link></li>
        <li class="nav-list-item"><router-link to="/ir">IR情報</router-link></li>
        <li class="nav-list-item"><router-link to="/recruit">採用情報</router-link></li>
        <li class="nav-list-item"><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.deskTop-nav {
  align-items: center;
  display: flex;
  width: 100%;
  height: 80px;
  background: #000;

  .nav-name {
    justify-content: center;
    align-items: center;
    color:#fff;
    padding: 10px;
    margin-right: auto;
  
    h1 {
      font-size: 24px;
      color: #fff;
    }
  }
  
  .nav-list-item {
    color:#fff;
    display: inline-block;

    a {
      padding:0 20px;
      font-weight: bold;
      color: #fff;
      line-height: 80px;
      font-size: 20px;
      display: inline-block;
      cursor: pointer;

      &.router-link-exact-active {
        color: #108852;
      }
      &:hover {
        background: var(--first-color);
        color: #fff;
      }
    }

  }
}

</style>
