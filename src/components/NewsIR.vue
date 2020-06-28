<template>
  <div class="news-ir-container">
    <div class="ir-content" v-for="list in lists" :key="list.id">
          <a href="#">
            <div class="ir-content-heading">
              <p class="date">{{ list.date }}</p>
              <span class="mark">IR情報</span>
            </div>
            <div class="ir-content__report">
                <p class="ir-content__title">{{ list.title }}</p>
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
          title: '2020年３月期 第３四半期決算短信',
          date: '2020年02月15日'
        },
        {
          id: '2',
          title: '業績予想の修正に関するお知らせ',
          date: '2020年02月07日'
        },
        {
          id: '3',
          title: '2020年２月期 第３四半期業績資料',
          date: '2020年02月07日'
        },
        {
          id: '4',
          title: '2020年３月期 第２四半期決算短信',
          date: '2019年11月08日'
        },
        {
          id: '5',
          title: '業績予想の修正に関するお知らせ',
          date: '2019年10月01日'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ir-content {
  border-bottom: #000 1px solid;
  position: relative;
  font-size: 14px;

  &:first-child {
    border-top: #000 1px solid;
  }

  .date {
    display: inline-block;
  }

  .mark {
    margin-left: 10px;
    background: var(--first-color);
    color: #fff;
    padding: 1px 10px;
    font-size: 12px;
    display: inline-block;
  }
}

.ir-content a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 15px 0;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:after {
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

.news-ir-container {
  border: 1px solid #999;
  border-radius: 0 0 4px 4px;
  padding: 0 10px;
  height: 300px;
  overflow-y: scroll;
  line-height: 1.7;
}

.ir-content__report {
  width: 90%;
  font-size: 14px;
}

/* ==== PC版==== */
@media (min-width: 768px){ 
  .ir-content,
  .ir-content__report {
    font-size: 16px;
  }
}

/* ==== PC版 (大) ==== */
@media (min-width: 1025px){
  .ir-content,
  .ir-content__report {
    font-size: 18px;
  }
}
</style>
