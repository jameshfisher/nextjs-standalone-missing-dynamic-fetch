import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { createStarryNight, common } from "@wooorm/starry-night";

export async function getServerSideProps(context) {
  const starryNight = await createStarryNight(common);

  const scope = starryNight.flagToScope("markdown");
  const tree = starryNight.highlight("# hi", scope);

  console.log(tree);

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
  return (
    <div className={styles.container}>
      Hello
    </div>
  );
}
