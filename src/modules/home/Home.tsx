import Image, { ImageLoaderProps } from "next/image";
import React from "react";
import styles from "./Home.module.scss";

const CDN_IMAGE_URL = process.env.NEXT_PUBLIC_CDN_IMAGE_URL;

const myLoader = ({
  src,
  width,
  quality = 100,
  height,
  format = "webp",
  fit = "inside",
}: {
  src: string;
  width?: number;
  quality?: number;
  height?: number;
  format?: string;
  fit?: string;
}) => {
  return `${CDN_IMAGE_URL}?src=${src}&width=${width}&height=${height}&format=${format}&quality=${quality}&fit=${fit}`;
};

const Home = () => {
  console.log("CDN_IMAGE_URL", CDN_IMAGE_URL);
  return (
    <div>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${myLoader({
            src: "home_background_fullsize_anim.png",
            height: 503,
          })})`,
        }}
      />
      <div className={styles.product}>
        <Image
          priority
          src={"GP-consult.png"}
          width={100}
          height={100}
          alt="GP-consult"
          quality={100}
          className={styles.imgProduct}
          loader={(p: ImageLoaderProps) =>
            myLoader({ ...p, width: undefined, height: undefined })
          }
        />
        <Image
          priority
          src={"Covid-test.png"}
          loader={(p: ImageLoaderProps) =>
            myLoader({ ...p, width: undefined, height: undefined })
          }
          width={100}
          height={100}
          alt="Covid-test"
          className={styles.imgProduct}
        />
        <Image
          priority
          src={`Covid-vaccine.png`}
          width={100}
          height={100}
          alt="Covid-vaccine"
          className={styles.imgProduct}
          loader={(p: ImageLoaderProps) =>
            myLoader({ ...p, width: undefined, height: undefined })
          }
        />
      </div>
    </div>
  );
};

export default React.memo(Home);
