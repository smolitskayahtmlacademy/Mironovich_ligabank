import React from 'react';

import styles from './promo.module.scss';


function Promo() {
  return (
    <section className={styles.promo}>
      <h2 className={styles.title}>Лига Банк</h2>
      <h3 className={styles.slogan}>Кредиты на любой случай</h3>
      <a className={styles.creditLink} href="/">Рассчитать кредит</a>
    </section>
  );
}

export default Promo;
