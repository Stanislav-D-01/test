import verifyImg from "../../image/Verify.svg";
import avatar from "../../image/avavtar.jpg";
import styles from "./avatar.module.css";

type TVerify = {
  verify: boolean;
};

export const Avatar = ({ verify }: TVerify) => {
  return (
    <div className={styles["avatar"]}>
      <img
        className={styles["avatar__avatarImg"]}
        src={avatar}
        alt="аваратрка"
      />

      <img
        className={styles["avatar__verify"]}
        src={verifyImg}
        alt={"подтвержденный аккаунт"}
      />
    </div>
  );
};
