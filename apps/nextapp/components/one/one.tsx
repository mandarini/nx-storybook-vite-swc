import styles from './one.module.css';

/* eslint-disable-next-line */
export interface OneProps {}

export function One(props: OneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to One!</h1>
    </div>
  );
}

export default One;
