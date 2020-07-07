import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return <Layout>
    <section className="newsletter-page">
      <div className="page-center">
        <h2>ติดต่อ หรือ แนะนำความคิดเห็น</h2>
        <h4>ทุกข้อเสนอแนะถือว่าเป็นประโยชน์สำหรับผู้เขียน</h4>
        <form className="contact-form"
         name="contact"
         method="post"
         netlify-honeypot="bot-field"
         data-netlify="true"
         action="/success"
         >
           <input type="hidden" name="bot-field"/>
           <input type="hidden" name="form-name" value="contact"/>

          <input type="text" name="name" placeholder="ชื่อ" className="form-control" />
          <input type="email" name="email" placeholder="อีเมล์" className="form-control" />
          <textarea name="message" rows="10" className="form-textarea"></textarea> 
          <button type="submit" className="btn form-control submit-btn">ส่งข้อความ</button>
        </form>
      </div>

    </section>
  </Layout>
}

export default NewsLetter
