import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return <Layout>
    <section className="success-page">
      <div className="page-center">
        <h2>ได้รับข้อความของท่านแล้ว เราจะติดต่อกลับโดยเร็วที่สุด</h2>
        <Link to="/" className="btn" >
        กลับหน้าหลัก
        </Link>
      </div>
    </section>
  </Layout>
}

export default Success
