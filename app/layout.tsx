import { Metadata } from "next";
import "../app/styles/global.css";
import { AuthProvider } from "../context/authContext";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Yolinam",
  },
  description: "let's cooking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
