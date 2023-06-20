/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './portfolio.module.scss';
import { Metadata } from 'next/types';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Portfolio of Luke Evans',
  description: 'A summary of what i am doing and where to find me',
};

export default async function Index() {
  return (
    <div className={styles.Portfolio}>
      <div className={styles.Portfolio_left_gradient} />
      <div className={styles.Portfolio_content}>
        <h1 className={styles.Portfolio_title}>Luke.</h1>
        <div className={styles.Portfolio_summary}>
          <p>Hello there! My name is Luke and I'm a software Engineer.</p>
          <p>
            I'm currently working at Huel as a Senior Frontend Engineer and
            working on personal projects in my spare time.
          </p>
        </div>
        <div className={styles.Portfolio_links}>
          <div className={styles.Portfolio_links_col}>
            <p className={styles.Portfolio_link_text}>Reach me at</p>
            <a href="mailto:xlukexevansx@gmail.com">
              <p>xlukexevansx@gmail.com</p>
            </a>
          </div>
          <div className={styles.Portfolio_links_col}>
            <p className={styles.Portfolio_link_text}>Or find me here</p>
            <a href="https://www.linkedin.com/in/luke-evans-dev/">
              <p>Linkedin</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
