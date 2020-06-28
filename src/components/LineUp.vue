<template>
  <div class="lineup-wrapper">
    <div class="lineup-heading">
      
    </div>
    <div class="lineup-container">
      <div class="lineup-content" v-for="(product, index) in products" :key="index">
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

<style scoped lang="scss">
.lineup-wrapper h2 {
  margin: 30px 20px;
}

.lineup-content {
  padding: 10px 0;
  margin: 0 20px;

  img {
    height: 70px;
    width: 70px;
  }

  p {
    padding-left: 10px;
    line-height: 70px;
    margin: 0;
    font-size: 14px;
    font-weight: 600;
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

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -6px;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 8px solid var(--first-color);
      right: 12px;
      margin-right: -8px;
    }

    &:after {
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

    &:hover:after {
      left: 0; 
    }
  }
}
 
/* ==== PC版==== */
@media (min-width: 768px){ 
  .lineup-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 50px 40px 100px;
  }

  .lineup-wrapper h2 {
    margin: 30px 40px;
  }

  .lineup-content {
    padding: 0;
    margin: 0;

     img {
      height: 100px;
      width: 100px;
    }

    a {
      margin: 0 auto;
      height: 100px;
    }

    p {
      font-size: 16px;
      line-height: 100px;
      padding-left: 20px;
    }
  }
  .lineup {
    margin: 0 !important;
  }
}

/* ==== PC版 (大) ==== */
@media (min-width: 1025px){
  .lineup-content p{
    font-size: 20px;
  }
  .lineup-content {
    padding: 0;

     img {
      height: 130px;
      width: 130px;
    }

    a {
      margin: 0 auto;
      height: 130px;
    }

    p {
      font-size: 20px;
      line-height: 130px;
    }
  }
}

</style>
