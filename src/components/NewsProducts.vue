<template>
  <div class="news-products-container">
    <div class="products-content" v-for="list in lists" :key="list.id">
          <a href="#">
              <p class="products-content__date">{{ list.date }}</p>
              <span class="products-content__mark">製品情報</span>
              <div class="products-content__report">
                  <p class="products-content__title">{{ list.title }}</p>
              </div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: '1',
          title: '500V対応 AHシリーズ アルミ電解コンデンサの量産化',
          date: '2020年03月20日'
        },
        {
          id: '2',
          title: '0402サイズ　積層セラミックコンデンサの量産化',
          date: '2020年01月20日'
        },
        {
          id: '3',
          title: '125℃対応 AAシリーズ アルミ電解コンデンサの量産化',
          date: '2019年12月20日'
        },
        {
          id: '4',
          title: '150℃対応 DDシリーズ リチウム電池の量産化',
          date: '2019年11月20日'
        },
        {
          id: '5',
          title: '175℃対応　積層セラミックコンデンサの量産化',
          date: '2019年10月10日'
        },
        {
          id: '6',
          title: '630V対応 AVシリーズ アルミ電解コンデンサの量産化',
          date: '2019年10月2日'
        },
        {
          id: '7',
          title: '2000時間保障 DDシリーズ リチウム電池の量産化',
          date: '2019年9月20日'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.news-products-container {
  border: 1px solid #999;
  border-radius: 0 0 4px 4px;
  padding: 0 10px;
  height: 300px;
  overflow-y: scroll;
}
.products-content__report {
  width: 90%;
}

.products-content {
  border-bottom: #000 1px solid;
  position: relative;
  font-size: 14px;
  line-height: 1.7;

  &:first-child {
    border-top: #000 1px solid;
  }
}

.products-content a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 15px 0;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--first-color);
    right: 12px;
    margin-right: -8px;
  }
}

.products-content__date {
  display: inline-block;
}

.products-content__mark {
  margin-left: 10px;
  background: rgb(223, 73, 24);;
  color: #fff;
  padding: 1px 10px;
  font-size: 12px;
  display: inline-block;
}

/* ==== PC版==== */
@media (min-width: 768px){ 
  .news-products-container {
    margin: 0;
  }

  .products-content {
    font-size: 16px;
  }
}

/* ==== PC版 (大) ==== */
@media (min-width: 1025px){
  .products-content {
    font-size: 18px;
  }
}
</style>
