import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/client";

export const HeroBanner = ({ bannerData }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
        <h1>{bannerData.largeText1}</h1>
        <Image
          src={urlFor(bannerData.image)}
          width={400}
          height={400}
          alt="headset"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${bannerData.slug}`}>
            <button>{bannerData.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
