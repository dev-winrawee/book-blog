import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => <Layout>
    <section className="error-page">
        <div className="page-center">
            <span>404</span>
            <h3>ขอโทษครับ.. ไม่เจอหน้าที่คุณต้องการ</h3>
            <Link to="/" className="btn">
            กลับหน้าหลัก
            </Link>
        </div>
    </section>
</Layout>

export default NotFoundPage
