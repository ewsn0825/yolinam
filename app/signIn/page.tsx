import Image from "next/image";
import styles from "../styles/signIn.module.css";

export const metadata = {
  title: "SignIn",
};

export default async function SignIn() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className={styles.containerTop}></div>
      <Image
        className={styles.icon}
        src="/images/signIcon.png"
        alt="로그인 아이콘"
        width={70}
        height={70}
      />

      <div className="w-[90%] flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <span>로그인</span>
          <span>이메일과 비밀번호를 입력해주세요</span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#7C7C7C]">
            email
          </label>
          <input
            type="text"
            id="email"
            className="h-[50px] focus:outline-none border-b-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-[#7C7C7C]">
            password
          </label>
          <input
            type="password"
            id="password"
            className="h-[50px] focus:outline-none border-b-2"
          />
        </div>

        <button className="bg-brand-green h-[50px] rounded-xl text-white font-medium">
          Log In
        </button>

        <button className="flex items-center justify-center gap-4 bg-brand-blue h-[50px] rounded-xl relative">
          <div className="absolute left-5">
            <Image
              className="w-5"
              src="/images/google.svg"
              alt="구글 아이콘"
              width={20}
              height={20}
            />
          </div>
          <span className="text-white font-medium">Continue with Google</span>
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center top-20 font-semibold gap-2">
          <span>아직 계정이 없으신가요?</span>
          <button className="text-brand-green cursor-pointer hover:underline">
            회원가입하기
          </button>
        </div>
        <div className={styles.containerBottom}></div>
      </div>
    </div>
  );
}
