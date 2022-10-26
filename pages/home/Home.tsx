import Image from "next/image";
import React from "react";
import { CDN_IMAGE_URL } from "../../src/env";
import styles from "./Home.module.scss";

const Home = () => {
  console.log("CDN_IMAGE_URL", CDN_IMAGE_URL);
  return (
    <div>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${CDN_IMAGE_URL}?src=home_background_fullsize_anim.png&height=503&format=webp&quality=100&fit=inside)`,
        }}
      />
      <div className={styles.product}>
        <Image
          priority
          src={`${CDN_IMAGE_URL}?src=GP-consult.png&format=webp&quality=100&fit=inside`}
          width={100}
          height={100}
          alt="GP-consult"
          quality={100}
          className={styles.imgProduct}
        />
        <Image
          priority
          src={`${CDN_IMAGE_URL}?src=Covid-test.png&format=webp&quality=100&fit=inside`}
          width={100}
          height={100}
          alt="Covid-test"
          className={styles.imgProduct}
        />
        <Image
          priority
          src={`${CDN_IMAGE_URL}?src=Covid-vaccine.png&format=webp&quality=100&fit=inside`}
          width={100}
          height={100}
          alt="Covid-vaccine"
          className={styles.imgProduct}
        />
      </div>
    </div>
  );
};

export default React.memo(Home);
