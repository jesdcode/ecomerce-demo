import Link from "next/link";

type Props={
    product:Product;
}

function Product({product}:Props) {
  return (
    <Link href={`/product/${product.id}`}> 
        <div>
            {/* <ProductImage product={product} fill/> */}
        </div>
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    </Link>
  )
}

export default Product