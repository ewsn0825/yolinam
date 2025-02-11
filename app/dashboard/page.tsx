"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/authContext";

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signIn");
    }
  }, [user, router]);

  return user ? <div>Welcome {user.email}</div> : <div>Redirecting...</div>;
}
