import background from "../../image/fon.jpg";
import styles from "./profile.module.css";
import { Avatar } from "../avatar/avatar";
export const Profile = () => {
  return (
    <div className={styles["profile"]}>
      <img
        className={styles["profile__image"]}
        src={background}
        alt={"фон профиля"}
      />
      <Avatar verify />
    </div>
  );
};
