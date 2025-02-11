import styles from "../styles/onbording.module.css";
import { API_URL } from "../constants";
import Link from "next/link";

export const metadata = {
  title: "main",
};

async function getRecipe() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json);
  return json;
}

export default async function main() {
  // const recipe = await getRecipe();
  // console.log(recipe["COOKRCP01"]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Yolinam</h1>

      <Link href="/signIn">
        <button className={styles.button}>Get Started</button>
      </Link>
    </div>
  );
}
