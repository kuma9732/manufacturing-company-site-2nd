<template>
  <main id="recruit">
    <div class="recruit-heading">
      <h3>会社情報</h3>
      <h2>求める人材</h2>
    </div>
    <section class="recruit-text">
      <h4>『共ににモノづくりに没頭してくれる方を探しています』</h4>
      <p>近年、自動車分野・産業機器分野に注力し、事業を拡大しています。この分野は電子機器の高機能化により電子部品に求める要求レベルはますます高まり、我々はさらなるレベルアップが必要です。当社は、失敗を恐れず、粘り強く、柔軟な発想を持った『あなた』を待っています。</p>   
    </section>
    <section class="recruit-info">
      <h2>採用情報のご案内</h2>
      <div class="recruit-contents">
        <ul>
          <li><a href="#">会社概要</a></li>
          <li><a href="#">新卒採用</a></li>
          <li><a href="#">中途採用</a></li>
          <li><a href="#">Q＆A</a></li>
        </ul>
      </div>
    </section>
    <section class="contact">
      <ContactBox />
    </section>
  </main>
</template>

<script>
import ContactBox from '@/components/ContactBox.vue'

export default {
  components: {
    ContactBox
  }
}
</script>

<style lang="scss" scoped>
#recruit {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  margin: 30px 20px;
}

.recruit-text,
.recruit-contents,
.contact {
  margin: 0 20px 50px;
}

.recruit-text h4 {
  font-size: 20px;
}

.recruit-text p {
  line-height: 1.5rem;
}


.recruit-contents ul li {
  height: 60px;
  line-height: 60px;
}

.recruit-contents a {
  position: relative;
  border-bottom: #000 1px solid;
  display: block;
  color: #000;
  width: 100%;
  height: 100%;
  text-decoration: none;

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
    transition: .5s;
  }

  &:hover::before {
    right: 17px;
  }
}

/* ==== PC版==== */
@media (min-width: 768px){ 
  .recruit-text,
  .recruit-contents {
    margin: 0 40px 100px;
  }
  .contact {
    margin: 0 40px 50px;
  }

  h2 {
    margin: 30px 40px;
  }

  .recruit-text h4 {
    font-size: 24px;
  }

  .recruit-text p {
    line-height: 1.7;
    font-size: 20px;
    margin-top: 20px;
  }

  .recruit-contents a {
    font-size: 20px;
  }
}

</style>