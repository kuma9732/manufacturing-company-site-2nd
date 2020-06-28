<template>
  <div class="related-info-wrapper">
    <div class="related-info-heading">
        <h2>関連情報</h2>
    </div>
    <div class="related-info-container">
      <div class="related-content" v-for="application in applications" :key="application.id">
        <a href="#">
          <img :src="application.url" alt="">
          <p class="related-info-text">{{ application.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      applications: [
        {
          id: '1',
          name: '代表あいさつ',
          url: require('@/assets/image/greeting-president.jpg'),
        },
        {
          id: '2',
          name: '会社概要',
          url: require('@/assets/image/buildings.jpg'),
        },
        {
          id: '3',
          name: 'IR情報',
          url: require('@/assets/image/ir.jpg'),
        },
        {
          id: '4',
          name: '製品紹介',
          url: require('@/assets/image/mlcc_square.jpg'),
        },
        {
          id: '5',
          name: '役員一覧',
          url: require('@/assets/image/officer.jpg'),
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.related-info-wrapper {
  max-width: 1200px;

  h2 {
    margin: 30px 20px;
  }
}

.related-info-container {
  margin: 0 20px;
}

p {
    line-height: 100px;
    padding-left: 20px;
    margin: 0;
    font-size: 18px;
    color: #111;
    font-weight: 600;
}

img {
    height: 100px;
    width: 100px;
}

a {
    display: flex;
    margin: 0 auto;
    position: relative;
    border: rgba(106, 101, 104, .3) 1px solid;
    height: 100px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    width: 100%;

    &:before {
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
/* ==== PC版==== */
@media (min-width: 768px){ 
  .related-info-wrapper h2 {
    margin: 30px 40px;
  }


  .related-info-container {
    margin: 0 40px;
  }
  .related-info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .related-content {
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
      font-size: 20px;
    }
  }
}

/* ==== PC版 (大) ==== */
@media (min-width: 1025px){
  .related-content {
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
