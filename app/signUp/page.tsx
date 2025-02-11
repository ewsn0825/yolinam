"use client";

import Image from "next/image";
import styles from "../styles/signUp.module.css";
import { useState } from "react";
import Link from "next/link";

// export const metadata = {
//   title: "SignUp",
// };

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
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
          <span className="text-[#7C7C7C] mb-8">
            이메일과 비밀번호를 입력해주세요
          </span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-[#7C7C7C] font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="h-[50px] focus:outline-none border-b-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#7C7C7C] font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="h-[50px] focus:outline-none border-b-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-[#7C7C7C] font-medium">
            Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            className="h-[50px] focus:outline-none border-b-2 relative"
          />
          <button
            className="absolute right-[7%] top-[55%]"
            onClick={togglePasswordVisibility}
          >
            {/* <Image
              src={passwordVisible ? "/images/eye.png" : "/images/hide.png"}
              alt={passwordVisible ? "비밀번호 보기" : "비밀번호 숨기기"}
              width={24}
              height={24}
            /> */}
          </button>
        </div>

        <button className="bg-brand-green h-[50px] rounded-xl text-white font-medium">
          Sign Up
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center top-20 font-semibold gap-2">
          <span>이미 계정이 있으신가요?</span>
          <Link href="/signIn" className="z-10">
            <button className="text-brand-green cursor-pointer hover:underline z-10">
              로그인하기
            </button>
          </Link>
        </div>
        <div className={styles.containerBottom}></div>
      </div>
    </div>
  );
}
