const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function createProduct() {
  try {
    const itemNo = 1015441504; // Generate a unique 10-digit integer using nanoid
    const category = "home-linen";

    const product = await prisma.product.create({
      data: {
        title: "Meerab Bed in A Bag",
        serialNo: itemNo,
        type: 0,
        description:
          "Giving a play of colorful treat this spectacular bad in a bag was made with a rich violet green velvet filled comforter, enhanced with simple yet colorful and intricate stripes of embroidery cross the filled comforter. It is paired with same color standard shame with a subtle confection. It was then co ordinate with a set of colorful flat sheet along with equally adorned velvet decorative pillows to give you more lively and exciting look.",
        imageSrc: [
          "https://nishatlinen.com/cdn/shop/files/MEERAB.jpg?v=1689921381&width=700",
        ],
        price: 25699,
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
