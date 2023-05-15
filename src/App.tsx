import React from 'react';
import './App.css';
import punchLogo from './asseds/f.jpg';
import {Grid} from '@mui/material';

function App() {
  return (
    <div className="landing-page">

      <header className="header">
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
              <span className="buttonLoginText">Вход</span>
            </a>
          </div>

          <div className="regButton">
            <a href="https://rus2punchbet.space/d5f8f2d94" className="link">
              <span className="buttonRegText">Регистрация</span>
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">

          <div className="welcomeBlock">
            <span>СРАЗУ 4 ФРИБЕТА!</span>
          </div>

          <div className="descriptionBlock">
            <span>
              10 000₽
            </span>
          </div>

          <div className="refundDescriptionBlock">
            <span>ЗА ПЕРВОЕ ПОПОЛНЕНИЕ</span>
          </div>

          <a href="https://rus2punchbet.space/d469330ad" className="addFundsLink">
            <div className="addFundsBlock">
              <span>ПОПОЛНИТЬ СЧЕТ</span>
            </div>
          </a>


          <div className="depositDescriptionBlock">
            <span>ЧЕМ БОЛЬШЕ ДЕПОЗИТ, ТЕМ БОЛЬШЕ ФРИБЕТОВ!</span>
          </div>
        </div>
      </section>

      <section className='tableContentBlock'>

        <Grid container columns={6} display='flex' spacing={1} justifyContent='center' pt={8}>
          <Grid item xs={1} sx={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
          }}
          >
            Размер депозита
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            Кол-во фрибетов
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            Сумма фрибетов
          </Grid>
        </Grid>

        <Grid container columns={6} display='flex' spacing={1} justifyContent='center' pt={2}>
          <Grid item xs={1} sx={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
          }}
          >
            от 7 000₽
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            4
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            10 000₽
          </Grid>
        </Grid>

        <Grid container columns={6} display='flex' spacing={1} justifyContent='center' pt={2}>
          <Grid item xs={1} sx={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
          }}
          >
            от 3 000₽
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            3
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            4 000₽
          </Grid>
        </Grid>

        <Grid container columns={6} display='flex' spacing={1} justifyContent='center' pt={2}>
          <Grid item xs={1} sx={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
          }}
          >
            от 1 000₽
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            2
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            1 200₽
          </Grid>
        </Grid>

        <Grid container columns={6} display='flex' spacing={1} justifyContent='center' pt={2} >
          <Grid item xs={1} sx={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
          }}
          >
            от 500₽
          </Grid>
          <Grid item xs={1}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            2
          </Grid>
          <Grid item xs={1} pb={8}
                sx={{
                  color: 'rgb(102, 255, 40)',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>
            500₽
          </Grid>
        </Grid>

        <a href="https://rus2punchbet.space/d469330ad" className="addFundsLink">
          <div className="addFundsBlock">
            <span>ПОПОЛНИТЬ СЧЕТ</span>
          </div>
        </a>

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
