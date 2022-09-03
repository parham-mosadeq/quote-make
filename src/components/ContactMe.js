import React from 'react';
//* Styles
import styles from '../styles/footer.module.css';
const Footer = () => {
  return (
    <section className={styles.general}>
      <div className='container'>
        <p className='container mt-5 display-5 overflow-hidden text-capitalize'>
          hi, if you liked this project may be check it in github?! and also you
          can add me as a friend in linkedin ;)
        </p>
        <span className='text-secondary '>
          p.s: make sure to check the credits.
        </span>
      </div>
      <article className={styles.footerContainer}>
        <ul className={styles.footerUl}>
          <li className={styles.footerLi}>
            <a href='https://github.com/parham-mosadeq'>
              <i className='bi bi-github'></i>
            </a>
          </li>
          <li className={styles.footerLi}>
            <a href='https://www.linkedin.com/in/parham-mosadeqzadeh-01253b1b7'>
              <i className='bi bi-linkedin'></i>
            </a>
          </li>

          <li className={styles.footerLi}>
            <a href='https://github.com/lukePeavey/quotable'>
              <i className='bi bi-c-circle'></i>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Footer;
