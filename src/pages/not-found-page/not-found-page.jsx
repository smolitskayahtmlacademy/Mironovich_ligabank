import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

import styles from './not-found-page.module.scss';


function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <section className={styles.notFound}>
          <h1 className={styles.title}>404. Page not found</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default NotFoundPage;
