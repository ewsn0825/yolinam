// "use client";

// import Image from "next/image";
// import styles from "../styles/signIn.module.css";
// import { useState } from "react";
// import Link from "next/link";

// // export const metadata = {
// //   title: "SignIn",
// // };

// export default function SignIn() {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev);
//   };
//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-between">
//       <div className={styles.containerTop}></div>
//       <Image
//         className={styles.icon}
//         src="/images/signIcon.png"
//         alt="로그인 아이콘"
//         width={70}
//         height={70}
//       />

//       <div className="w-[90%] flex flex-col gap-5">
//         <div className="flex flex-col gap-2">
//           <span className="text-[#7C7C7C] mb-8">
//             이메일과 비밀번호를 입력해주세요
//           </span>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="email" className="text-[#7C7C7C] font-medium">
//             Email
//           </label>
//           <input
//             type="text"
//             id="email"
//             className="h-[50px] focus:outline-none border-b-2"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="password" className="text-[#7C7C7C] font-medium">
//             Password
//           </label>
//           <input
//             type={passwordVisible ? "text" : "password"}
//             id="password"
//             className="h-[50px] focus:outline-none border-b-2 relative"
//           />
//           <button
//             className="absolute right-[7%] top-[55%]"
//             onClick={togglePasswordVisibility}
//           >
//             <Image
//               src={passwordVisible ? "/images/eye.png" : "/images/hide.png"}
//               alt={passwordVisible ? "비밀번호 보기" : "비밀번호 숨기기"}
//               width={24}
//               height={24}
//             />
//           </button>
//         </div>

//         <button className="bg-brand-green h-[50px] rounded-xl text-white font-medium">
//           Log In
//         </button>

//         <button className="flex items-center justify-center gap-4 bg-brand-blue h-[50px] rounded-xl relative">
//           <div className="absolute left-5">
//             <Image
//               className="w-5"
//               src="/images/google.svg"
//               alt="구글 아이콘"
//               width={20}
//               height={20}
//             />
//           </div>
//           <span className="text-white font-medium">Continue with Google</span>
//         </button>
//       </div>

//       <div className="relative">
//         <div className="absolute inset-0 flex justify-center items-center top-20 font-semibold gap-2">
//           <span>아직 계정이 없으신가요?</span>
//           <Link href="/signUp" className="z-10">
//             <button className="text-brand-green cursor-pointer hover:underline z-10">
//               회원가입하기
//             </button>
//           </Link>
//         </div>
//         <div className={styles.containerBottom}></div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import styles from "../styles/signIn.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // for navigation
import {
  auth,
  signInWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
} from "../../firebase"; // import Firebase methods

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/main"); // redirect to the main page after successful sign-in
    } catch (error) {
      console.error(
        "Error signing in with email and password: ",
        error.message
      );
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = googleProvider;
    try {
      await signInWithPopup(auth, provider);
      router.push("/main"); // redirect to main page on Google sign-in
    } catch (error) {
      console.error("Error signing in with Google: ", error.message);
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
          <label htmlFor="email" className="text-[#7C7C7C] font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            className="h-[50px] focus:outline-none border-b-2 relative"
          />
          <button
            className="absolute right-[7%] top-[55%]"
            onClick={togglePasswordVisibility}
          >
            <Image
              src={passwordVisible ? "/images/eye.png" : "/images/hide.png"}
              alt={passwordVisible ? "비밀번호 보기" : "비밀번호 숨기기"}
              width={24}
              height={24}
            />
          </button>
        </div>

        <button
          onClick={handleSignIn}
          className="bg-brand-green h-[50px] rounded-xl text-white font-medium"
        >
          Log In
        </button>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-4 bg-brand-blue h-[50px] rounded-xl relative"
        >
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
          <Link href="/signUp" className="z-10">
            <button className="text-brand-green cursor-pointer hover:underline z-10">
              회원가입하기
            </button>
          </Link>
        </div>
        <div className={styles.containerBottom}></div>
      </div>
    </div>
  );
}
