const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function createProduct() {
  try {
    const itemNo = 42307062; // Generate a unique 10-digit integer using nanoid
    const category = "men";

    const product = await prisma.product.create({
      data: {
        title: "Naqsh Suit",
        serialNo: itemNo,
        type: 2,
        description:
          "Look aristocratic by wearing this supper fine high quality fabric from the latest men unstitched collection.",
        imageSrc: [
          "https://nishatlinen.com/cdn/shop/products/42307062--_1.jpg?v=1675313320&width=600",
          "https://nishatlinen.com/cdn/shop/products/42307062--_4.jpg?v=1675313320&width=600",
          "https://nishatlinen.com/cdn/shop/products/42307062--_3.jpg?v=1675313320&width=600",
        ],
        price: 5699,
        category: category,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma?.$disconnect();
  }
}

createProduct();
