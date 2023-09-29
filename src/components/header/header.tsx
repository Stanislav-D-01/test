import logo from "../../image/Logo.svg";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <img className={styles["header__image"]} src={logo} alt="logo" />
      <ul className={styles["header__ul"]}>
        <li className={styles["header__li"]}>DISCOVER</li>
        <li className={styles["header__li"]}>CREATORS</li>
        <li className={styles["header__li"]}>SELL</li>
        <li className={styles["header__li"]}>STATS</li>
      </ul>
      <input
        placeholder={`Search Art Work / Creator`}
        className={styles["header__input"]}
      />
      <button className={styles["header__button"]}>CONNECT WALLET</button>
    </header>
  );
};
