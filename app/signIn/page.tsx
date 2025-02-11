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

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "../../firebase";
import Image from "next/image";
import styles from "../styles/signIn.module.css";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Email"
        className="border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        className="border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
        Log In
      </button>
      <button onClick={handleGoogleLogin} className="bg-red-500 text-white p-2">
        Sign in with Google
      </button>
    </div>
  );
}
