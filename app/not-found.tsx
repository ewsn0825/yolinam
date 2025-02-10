import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
  // description: "The best movies on the best framework",
};

export default function Notfound() {
  return (
    <div>
      {/* <Navigation /> */}
      <h1>Not Found!</h1>
    </div>
  );
}
