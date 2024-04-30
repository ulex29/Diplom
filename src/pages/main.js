import React from 'react';
import { Helmet } from 'react-helmet';
// import '../css/main.css';


function Header() {
    return (
      <header>
        <Helmet>
        <title>Займись делом!|Главная</title>
        <link rel="icon" type="image/png" href="img/fire32.png" />
        </Helmet>
        <nav>
            <h1>Главная</h1>
          <ul class="menu-bar">
            <li><img src='img/fire32.png' alt="Логотип" /></li>
            <li><a href="/">Главная</a></li>
            <li><a href="/about">О проекте</a></li>
            <li><a href="/workout">Тренировки</a></li>
            <li><a href="/results">Результаты</a></li>
            <li><a href="/login">Личный кабинет</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Название вашей компании</p>
    </footer>
  );
}

function Main() {
  return (
    <main>
      <p>Основное содержимое страницы</p>
    </main>
  );
}

function MainPage() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default MainPage;
