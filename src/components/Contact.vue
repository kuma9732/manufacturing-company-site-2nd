<template>
  <div class="contact-box">
    <h4>お問い合わせ</h4>
        <div class="contact-box__text">
            <p>ご不明な点がありましたら、お気軽にお問い合わせください。</p>
            <a href="contact.html">お問い合わせ</a>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.contact-box {
  border: 1px solid var(--first-color);
  text-align: center;
  max-width: 800px;
  margin: 50px auto 0px;
  
  h4 {
    border-bottom: 1px solid var(--first-color);
    background-color: var(--third-color);
    margin: 0;
    font-size: 20px;
    padding: 10px 0;
    display: block;
    font-weight: 600;
  }
}

.contact-box__text {
  margin-bottom: 10px;
  
  p {
    padding: 5px;
    margin: 10px 0;
    font-size: 16px;
  }
  a {
    padding: 10px 50px;
    color: #000;
    display: inline-block;
    background: var(--first-color);
    color: #fff;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
  }
}

</style>
