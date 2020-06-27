<template>
  <div class="lineup-contents">
    <div class="home-lineup__heading">
      <h2>ラインアップ</h2>
    </div>
    <div v-for="(product, index) in products" :key="index" class="products-lineup__left">
      <div class="lineup-content">
        <a href="#">
          <img :src="product.url" alt="">
          <p>{{ product.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { 
          name: 'アルミ電解コンデンサ',
          url: require('@/assets/image/alumi_capacitor_square.jpg')
        },
        { 
          name: '積層セラミックコンデンサ',
          url: require('@/assets/image/mlcc_square.jpg')
        },
        { 
          name: 'リチウムイオン電池',
          url: require('@/assets/image/lithium-battery_square.jpg')
        },
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lineup-content {
  padding: 10px 0;

  img {
    height: 70px;
    width: 70px;
  }

  p{
    padding: 25px 30px 0 10px;
    margin: 0;
    font-size: 14px;
    color: #111;
  }
  a {
    display: flex;
    margin: 0 auto;
    position: relative;
    border: rgba(106, 101, 104, .3) 1px solid;
    height: 70px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    width: 100%;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -3px;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 8px solid var(--first-color);
      right: 12px;
      margin-right: -8px;
    }
    
    &::after {
      background : var(--first-color);
      opacity: .1;
      content:"";
      display: block;
      height: 100%;
      left: -100%;
      position: absolute;
      transition: .4s;
      top: 0px;
      width: 100%;
    }

    &:hover::after {
      left:0; 
    }
  }
}


</style>
