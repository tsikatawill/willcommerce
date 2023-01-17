import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/client";

export const FooterBanner = ({
  bannerData: {
    desc,
    discount,
    largeText1,
    largeText2,
    midText,
    saleTime,
    product,
    smallText,
    image,
    buttonText,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button>{buttonText}</button>
          </Link>
        </div>

        <Image
          src={urlFor(image)}
          className="footer-banner-image"
          width={400}
          height={400}
          alt={product}
        />
      </div>
    </div>
  );
};
