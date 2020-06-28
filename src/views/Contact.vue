<template>
  <main id="contact">
    <div class="contact-heading">
      <h3>お問い合わせ</h3>
    </div>
    <section class="contact-wrapper">
      <p>ご意見、ご感想などがありましたら、以下の欄にご記入の上、送信してください。記事に関するご質問などもお気軽にお寄せください。</p>
      <div class="contact-box">
        <dl>
          <dt>お名前<span class="required">必須</span></dt>
          <dd><input type="text" name="name" placeholder="例）世良 権造"></dd>
        </dl>
        <dl>
          <dt>メールアドレス<span class="required">必須</span></dt>
          <dd><input type="text" name="email" placeholder="例）ceracon@ceracon.co.jp"></dd>
        </dl>
        <dl>
          <dt>電話番号<span class="required">必須</span></dt>
          <dd><input type="text" name="tel" placeholder="例）000-0000-0000"></dd>
        </dl>
        <dl>
          <dt>会社名</dt>
          <dd><input type="text" name="company" size="60" value="" placeholder="例）CERA-CON株式会社"></dd>
        </dl>
        <dl>
          <dt>役職</dt>
          <dd><input type="text" name="position" size="60" value="" placeholder="例）開発部長"></dd>
        </dl>
        <dl>
          <dt>部署名</dt>
          <dd><input type="text" name="department-name" size="60" value="" placeholder="例）開発部"></dd>
        </dl>
        <dl>
          <dt>お問い合わせ内容<span class="required">必須</span></dt>
          <dd><textarea name="detail" cols="50" rows="5" placeholder="お問い合わせ内容をご記入ください"></textarea></dd>
        </dl>
        <div>
          <input type="submit" value="送信">
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
#contact {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-wrapper {
  margin: 0 20px;

  p {
    margin: 20px 0;
    font-size: 18px;
  }
}

.contact-box dl {
  margin-bottom: 0;
  margin-top: 0;
}

.contact-box dt {
  font-size: 14px;
  font-weight: 700;
  padding: 8px 20px;
  background: var(--third-color);
  border: 1px solid var(--secondary-color);
}

.contact-box span {
  float: right;
  background: rgb(226, 48, 16);
  padding: 5px 10px;
  margin-top: -3px;
  color: #fff;
  font-size: 12px;
}

.contact-box dd {
  font-size: 14px;
  font-weight: 700;
  padding: 20px;
  border: 1px solid var(--secondary-color);
  border-top: none;
  border-bottom: none;
  margin-bottom: 0;
  margin-left: 0;
}

.contact-box input[type=submit] {
  background: var(--first-color);
  color: #fff;
  border: none;
  -webkit-appearance: none;
  padding: 10px 50px;
  display: inline-block;
  margin-bottom: 10px;
  font-weight: 600;
  cursor: pointer;
}

.contact-box input,
.contact-box textarea {
  width: 100%;
  padding: 10px 0;
}

/* ==== PC版==== */
@media (min-width: 768px){ 
  .contact-wrapper {
    margin: 0 40px;
  }

  .contact-box input,
  .contact-box textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  .contact-box dl {
    display: flex;
  }

  .contact-box dt {
    width: 35%;
    padding-top: 30px;
    padding-left: 30px;
    border: 1px solid var(--secondary-color);
    border-right: none;
    border-bottom: none;
    font-size: 18px;
  }

  .contact-box dd {
    border: 1px solid var(--secondary-color);
    border-bottom: none;
    width: 65%;
  }

  .contact-box input[type=submit] {
    padding: 15px 100px;
    font-weight: 600;
    font-size: 20px;
  }
}

/* ==== PC版 (大) ==== */
@media (min-width: 1025px){

}
</style>