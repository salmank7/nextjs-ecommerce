import getCurrentUser from "./getCurrentUser";
import getProducts from "./getProducts";
import prisma from "@/app/libs/prismadb"


export default async function getFavouriteProducts() {
    try {
        const products = await getProducts();
        const currentUser = await getCurrentUser()

        if(!currentUser) return null

        const user = await prisma.user.findUnique({
            where: {
                id: currentUser.id
            },
            select: {
                favouriteIds: true
            }
        })

        if(!user || !user.favouriteIds) return []

        const favouriteProductIds = user.favouriteIds;

        const favouriteProducts = products?.filter((product)=> {
            return favouriteProductIds.includes(product.id)
        })

        return favouriteProducts;
    } catch (error) {
        throw new Error()
    }
}