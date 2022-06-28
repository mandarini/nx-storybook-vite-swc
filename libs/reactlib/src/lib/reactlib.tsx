import styles from './reactlib.module.css';

/* eslint-disable-next-line */
export interface ReactlibProps {}

export function Reactlib(props: ReactlibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Reactlib!</h1>
    </div>
  );
}

export default Reactlib;
