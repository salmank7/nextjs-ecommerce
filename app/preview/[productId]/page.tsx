import getProducts from "@/app/actions/getProducts";
import Image from "next/image";

interface PreviewProps {
  params: any;
}

const page: React.FC<PreviewProps> = async ({ params }) => {
  const products = await getProducts();

  console.log(params);
  const currentProduct = products?.find(
    (product) => product.id === params.productId
  );

  return <div className="mt-[51px] md:mt-[155px]">{currentProduct?.title}</div>;
};

export default page;
