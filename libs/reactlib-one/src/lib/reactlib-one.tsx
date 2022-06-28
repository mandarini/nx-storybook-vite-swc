import styles from './reactlib-one.module.css';

/* eslint-disable-next-line */
export interface ReactlibOneProps {}

export function ReactlibOne(props: ReactlibOneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactlibOne!</h1>
    </div>
  );
}

export default ReactlibOne;
