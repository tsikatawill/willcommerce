import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/client";

export const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={urlFor(image[0])}
            width={250}
            height={250}
            alt={name}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Ghc{parseFloat(price).toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};
