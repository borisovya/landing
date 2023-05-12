import React from 'react';
import './App.css';
import punchLogo from './asseds/f.jpg';

function App() {
  return (
    <div className="landing-page">

      <header className="header">
        {/*<a href="https://rus2punchbet.space/d469330ad" className="logo">*/}
          <img src={punchLogo} alt="logo"/>
        {/*</a>*/}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="https://rus2punchbet.space/d5f8f2d94">Новости</a>
            </li>
            <li>
              <a href="https://rus2punchbet.space/d5f8f2d94">Спортивные события</a>
            </li>
            <li>
              <a href="https://rus2punchbet.space/d5f8f2d94">Бонусы</a>
            </li>
          </ul>
        </nav>

        <div className="buttonsBlock">
          <div className="loginButton">
            <a href="https://1betpunch.space" className="link">
            <span className="buttonTexts">Вход</span>
            </a>
          </div>

          <div className="regButton">
            <a href="https://rus2punchbet.space/d5f8f2d94" className="link">
              <span className="buttonTexts">Регистрация</span>
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Добро пожаловать в Punch Bet</h1>
          <p>
            Надежная букмекерская компания, предлагающая лучшие коэффициенты и
            широкий выбор спортивных событий.
          </p>

          <a href="https://rus2punchbet.space/d469330ad" className="link">
            <div className="addFundsBlock">
              <span>Пополнить счет</span>
            </div>
          </a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src="icon1.png" alt="Feature 1"/>
          <h2>Широкий выбор спортивных событий</h2>
          <p>
            У нас вы найдете огромный выбор спортивных событий, от футбола до
            тенниса и гольфа.
          </p>
        </div>
        <div className="feature">
          <img src="icon2.png" alt="Feature 2"/>
          <h2>Лучшие коэффициенты на рынке</h2>
          <p>Мы предлагаем конкурентные коэффициенты для всех видов ставок.</p>
        </div>
        <div className="feature">
          <img src="icon3.png" alt="Feature 3"/>
          <h2>Простой и удобный интерфейс</h2>
          <p>Мы создали интуитивно понятный и удобный интерфейс для наших клиентов.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2023 Punch Bet. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;
