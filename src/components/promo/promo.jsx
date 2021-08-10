import React from 'react';

import styles from './promo.module.scss';


function Promo() {
  return (
    <section className={styles.promo}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Лига Банк</h2>
        <h3 className={styles.slogan}>Кредиты на любой случай</h3>
        <a className={styles.credit_link} href="/">Рассчитать кредит</a>
      </div>
    </section>
  );
}


export default Promo;
