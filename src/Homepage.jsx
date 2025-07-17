import React from 'react'
import "./Homepage.css"
import imgbaner from './img/image.png'
import {services} from "./sevices.js"
import {products} from "./prohome.js"
import { articles } from './articles.js';
function Homepage() {

  return(
    <>
      
<section className="services">
      <div className="container">
        <h2 className="subtitle">خدمات ما</h2>
        <h3 className="title">ما در ایکس پاور چه خدماتی ارائه میکنیم؟</h3>
        <div className="cards">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card ${index === 1 ? "card-active" : ""}`}
            >
              <div className="icon">{service.icon}</div>
              <h4 className="card-title">{service.title}</h4>
              <p className="card-description">{service.description}</p>
              <a href="#" className="card-link">
                ادامه مطلب →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="products">
      <div className="container">
        <h2 className="subtitle">محصولات ما</h2>
        <h3 className="title">محصولات ویژه ورزشی </h3>
        <div className="cards">
        {products.map((product, index) => (
  <div
    key={index}
    className="card"
  >
    <div className="icon">
      <img src={product.image} alt={product.name} />
    </div>
    <h4 className="card-title">{product.name}</h4>
    <p className="card-description">{product.description}</p>
    <p className="card-price">{product.price}</p>
    <button className="buy-button">خرید محصول</button>
  </div>
))}

        </div>
      </div>
    </section>
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-image">
            <img src={imgbaner} alt="بنر" />
          </div>
          <div className="banner-text">
            <h2 className="banner-title">به EPik-store خوش آمدید</h2>
            <p className="banner-description">
              بهترین محصولات، برنامه‌های تمرینی و رژیم‌های غذایی ویژه شما
              برای رسیدن به تناسب اندام و سلامتی.
            </p>
            <button className="banner-button">مشاهده محصولات</button>
          </div>
        </div>
      </div>
    </section>

    <section className="secthe">
      <h2 className="title-mainthe">جدیدترین مقالات</h2>
      <div className="cards">
        {articles.map((item, i) => (
          <div className="cardthe" key={i}>
            <div className="img-boxthe">
              <img src={item.image} alt={item.title} />
              <span className="timethe">{item.time}</span>
            </div>
            <div className="infothe">
              <h3 className="titlethe">{item.title}</h3>
              <p className="descthe">{item.desc}</p>
            </div>
            <div className="arrowthe">⬇</div>
          </div>
        ))}
      </div>
    </section>

    </>
);
  

  
}

export default Homepage