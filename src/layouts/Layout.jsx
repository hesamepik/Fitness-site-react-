import React from 'react';
import '../layouts/FitnessHeader.css';
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../imgart/enamad.png"
import img4 from "../imgart/zarin.png"
import { usecard } from '../context/Cardcontext';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

import { FaTelegram, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

function Layout({ children }) {
  const {state } = usecard();
  const { theme, toggleTheme } = useContext(ThemeContext);

  
  return (
    <>
      <header className="fitness-header">
  <nav className="navbar">
    <div className="logo">HESAMEPIK</div>
    <button onClick={toggleTheme} className="theme-toggle-btn">
  {theme === 'dark' ? '☀️' : '🌙'}
</button>

    <ul className="nav-links">
      <li><Link to="/" > صفحه اصلی</Link>   </li>
      <li><Link to="/products">فروشگاه</Link></li>
      <li className="cart-link">
        <Link to="/Cheakout">سبد خرید</Link>
        <span className="cartCount">{state.itemCounter}</span>
      </li>
      <li><a href="#">بلاگ</a></li>
      <li><a href="#">درباره ما</a></li>
    </ul>
    <button className="login-btn">ورود و ثبت‌نام</button>
  </nav>

  <section className="hero">
    <div className="hero-content">
      <h1>هر آنچه برای رسیدن به اندام ایده‌آل نیاز دارید</h1>
      <p>تخصصی‌ترین وبسایت بدنسازی دارای مجوز رسمی</p>

      <div className="stats">
        <div className="stat"><span>+2000</span><p>کاربر فعال</p></div>
        <div className="stat"><span>+2450</span><p>مکمل بدنسازی</p></div>
        <div className="stat"><span>+1000</span><p>رژیم آنلاین</p></div>
      </div>
    </div>

    <div className="hero-image">
      <img src={img1} alt="بدنساز" />
    </div>
  </section>

  <div className="quote-bar">
    همه می‌خواهند بدنساز باشند اما کسی نمی‌خواهد وزنه‌های سنگین بلند کند!
  </div>
  <div className='imgban'>
    <img src={img2} alt="بنر" />
  </div>
</header>


      <main>{children}</main>

      <footer className="ftr">

      <div className="top">
        <span>ما را در شبکه های اجتماعی دنبال کنید</span>
        <div className="icons">
          <FaTelegram />
          <FaInstagram />
          <FaWhatsapp />
          <FaTwitter />
        </div>
        <span className="tel">شماره تماس: 111111111</span>
      </div>

  
      <div className="main">
       
        <div className="col">
          <h4>راهنمای مشتریان</h4>
          <ul>
            <li>پاسخ به پرسش های متداول</li>
            <li>روش های ارسال کالا</li>
            <li>روش های پرداخت</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>

      
        <div className="col">
          <h4>راهنمای مشتریان</h4>
          <ul>
            <li>پاسخ به پرسش های متداول</li>
            <li>روش های ارسال کالا</li>
            <li>روش های پرداخت</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>

       
        <div className="logos">
          <img src={img3} alt="ای نماد" />
          <img src={img4} alt="زرین‌پال" />
        </div>
      </div>


      <div className="copy">کلیه حقوق متعلق به این وب‌سایت می‌باشد.</div>
    </footer>
    </>
  );
}

export default Layout;
