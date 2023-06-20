import styles from './index.module.scss';

export const runtime = 'edge';

export default async function Index() {
  return (
    <div className={styles.Home}>
      <header>
        <h1 className={styles.Home_title}>
          Hi, my name is Luke, a Frontend Engineer.
        </h1>
      </header>
    </div>
  );
}
