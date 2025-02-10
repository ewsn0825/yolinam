import Image from "next/image";
import styles from "../styles/signUp.module.css";

export const metadata = {
  title: "SignUp",
};

export default async function SignUp() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src="/images/signIcon.png"
        alt="회원가입 아이콘"
        width={70}
        height={70}
      />

      <div>
        <span>아직 계정이 없으신가요?</span>
        <button>회원가입하기</button>
      </div>
    </div>
  );
}
