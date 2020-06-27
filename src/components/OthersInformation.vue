<template>
  <div class="related-info-wrapper">
    <div class="related-info-heading">
        <h2>その他</h2>
    </div>
    <div class="related-info-content" v-for="info in othersInfomation" :key="info.id">
      <a href="#">
        <img :src="info.url" alt="">
        <p>{{ info.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      othersInfomation: [
        {
          id: '1',
          name: '採用情報',
          url: require('@/assets/image/recruit.jpg'),
        },
        {
          id: '2',
          name: 'お問い合わせ',
          url: require('@/assets/image/contact.jpg'),
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.related-info-content{
  margin-top: 20px;
  padding: 0;
  text-align: center;
  width: 130px;
  height: 130px;
  position: relative;
  overflow: hidden;
  float: left;
  margin-right: 20px;
}

.related-info-content img {
  width: 100%; 
  height: 100%;
  display: block;
	transition-duration: .3s;
}

.related-info-content img:hover {
	transform: scale(1.1);
	transition-duration: .3s;
}

.related-info-content p{
  font-size: 16px;
  background-color: rgba(0,0,0,.6);
  margin-bottom: 0;
  padding: 10px 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  font-weight: 600;
  color: #fff;
}

.related-info-content a{
  text-decoration: none;
  color: #fff;
}

</style>
