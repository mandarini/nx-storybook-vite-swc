import styles from './nextlib.module.css';

/* eslint-disable-next-line */
export interface NextlibProps {}

export function Nextlib(props: NextlibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Nextlib!</h1>
    </div>
  );
}

export default Nextlib;
