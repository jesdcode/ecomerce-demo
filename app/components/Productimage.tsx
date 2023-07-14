"use client"
import Image from "next/image";
import {useEffect, useState } from "react";

type Props={
    product: Product;
    fill?: boolean;
};

function Productimage({product, fill}:Props) {
    const [loading, setloading] = useState(true);
  return <>
  {fill ? (
   <Image src={product.image}  alt={product.title}
    fill
    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
        loading
        ? "scale-110 blur-2xl grayscale"
        : "scale-100 blur-0 grayscale-0 "
    }}`}
    onLoadingComplete={() => setloading(false)} 
    />

  ): (
    <Image
    src={product.image}
    alt={product.title}
    width={400}
    height={1000}
    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
        loading
        ? "scale-110 blur-2xl grayscale"
        : "scale-100 blur-0 grayscale-0 "
    }}`}
    onLoadingComplete={() => setloading(false)} 
    />
  )}
  </>;
}

export default Productimage