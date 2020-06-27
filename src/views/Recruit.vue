<template>
  <main id="recruit">
    <div class="recruit-heading">
      <h3>会社情報</h3>
    </div>
    <section class="recruit-text">
      <h2>求める人材</h2>
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
      <Contact />
    </section>
  </main>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  // name: 'Home',
  components: {
    Contact
  }
}
</script>

<style lang="scss" scoped>
.recruit-text,
.recruit-info,
.contact {
  margin: 0 20px;
}

.recruit-text h4 {
  font-size: 20px;
}

.recruit-text p {
  line-height: 1.5rem;
  padding: 0 10px;
}

.recruit-contents h2 {
  margin: 0 0 10px 0;
  border-bottom: var(--first-color) 2px solid;
  display: block;
  font-size: 28px;
}

.recruit-contents ul li {
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
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

}


/* ==== PC版 (大) ==== */
@media (min-width: 1025px){

}
</style>