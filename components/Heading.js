import styles from "./Heading.module.css";

const Heading = ({ children }) => <h1 className={styles.h1}>{children}</h1>;

export default Heading;
