import React from 'react';
import Logo from '../logo/logo';
import Social from '../social/social';

import styles from './footer.module.scss';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <Logo className={styles.logo}/>
        <p className={styles.address}>
          150015, г. Москва, ул. Московская, д. 32
          Генеральная лицензия Банка России №1050
          Ⓒ Лига Банк, 2019
        </p>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="/">Услуги</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Рассчитать кредит</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Контакты</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Задать вопрос</a>
        </li>
      </ul>
      <section className={styles.contacts}>
        <div className={styles.mobile}>
          <a href="tel: *0904" className={`${styles.phoneNumber} ${styles.phoneNumber_mobile}`}>*0904</a>
          <p className={styles.phoneInfo}>Бесплатно&nbsp;для&nbsp;абонентов МТС,&nbsp;Билайн,&nbsp;Мегафон,&nbsp;Теле2</p>
        </div>
        <div className={styles.phone}>
          <a href="tel: +78001112233" className={`${styles.phoneNumber} ${styles.phoneNumber_main}`}>8 800 111 22 33</a>
          <p className={styles.phoneInfo}>Бесплатный для всех городов России</p>
        </div>
      </section>
      <Social className={styles.social}/>
    </footer>
  );
}


export default Footer;
