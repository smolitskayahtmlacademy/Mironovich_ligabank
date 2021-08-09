import React from 'react';
import Logo from '../logo/logo';
import Social from '../social/social';

import styles from './footer.module.scss';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Logo className={styles.logo}/>
          <p className={styles.address}>
            150015, г. Москва, ул. Московская, д. 32
            Генеральная лицензия Банка России №1050
            Ⓒ Лига Банк, 2019
          </p>
        </div>
        <ul className={styles.nav}>
          <li className={styles.nav_item}>
            <a href="/">Услуги</a>
          </li>
          <li className={styles.nav_item}>
            <a href="/">Рассчитать кредит</a>
          </li>
          <li className={styles.nav_item}>
            <a href="/">Контакты</a>
          </li>
          <li className={styles.nav_item}>
            <a href="/">Задать вопрос</a>
          </li>
        </ul>
        <section className={styles.contacts}>
          <div className={styles.mobile}>
            <a href="tel: *0904" className={`${styles.phone_number} ${styles.phone_number_mobile}`}>*0904</a>
            <p className={styles.phone_info}>Бесплатно&nbsp;для&nbsp;абонентов МТС,&nbsp;Билайн,&nbsp;Мегафон,&nbsp;Теле2</p>
          </div>
          <div className={styles.phone}>
            <a href="tel: +78001112233" className={`${styles.phone_number} ${styles.phone_number_main}`}>8 800 111 22 33</a>
            <p className={styles.phone_info}>Бесплатный для всех городов России</p>
          </div>
        </section>
        <Social className={styles.social}/>
      </div>
    </footer>
  );
}


export default Footer;
