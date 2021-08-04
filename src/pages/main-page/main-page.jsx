import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Promo from '../../components/promo/promo';

import styles from './main-page.module.scss';


function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <h1 className="visuallyHidden">Лига банк - страница &quot;Конвертер валют&quot;</h1>
        <Promo />
      </main>
      <Footer />
    </div>
  );
}


export default MainPage;
