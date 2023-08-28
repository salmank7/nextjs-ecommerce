import getProducts from "@/app/actions/getProducts";

interface PreviewProps {
  params: {
    productId: string;
  };
}

const page: React.FC<PreviewProps> = async ({ params }) => {
  const products = await getProducts();

  console.log(params);
  const currentProduct = products?.find(
    (product: any) => product.id === params.productId
  );

  return <div className="mt-[51px] md:mt-[155px]">{currentProduct?.title}</div>;
};

export default page;
