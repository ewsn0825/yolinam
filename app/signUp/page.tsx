"use client";

import Image from "next/image";
import styles from "../styles/signUp.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore, googleProvider } from "../../firebase";

// export const metadata = {
//   title: "SignUp",
// };

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // 회원가입 처리 함수
  const handleSignUp = async () => {
    if (!email || !password || !username) {
      setError("모든 필드를 입력해 주세요.");
      return;
    }

    try {
      // Firebase v9 문법으로 회원가입
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      await setDoc(doc(firestore, "users", user.uid), {
        username: username,
        email: email,
        createdAt: new Date(),
      });

      alert("회원가입이 완료되었습니다!");
      setEmail("");
      setPassword("");
      setUsername("");
      setError("");

      router.push("/signIn");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setError("이메일을 형식에 맞게 입력해주세요");
      } else {
        setError("이미 중복된 이메일이 있습니다");
      }
      // setError(error.message);
    }
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="사용자 이름"
            className="h-[50px] focus:outline-none border-b-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#7C7C7C] font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="h-[50px] focus:outline-none border-b-2 relative"
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="passwordCheck" className="text-[#7C7C7C] font-medium">
            Password Check
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="passwordCheck"
            className="h-[50px] focus:outline-none border-b-2 relative"
          />
        </div> */}

        {/* 에러 메시지 */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          className="bg-brand-green h-[50px] rounded-xl text-white font-medium"
          onClick={handleSignUp}
        >
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
