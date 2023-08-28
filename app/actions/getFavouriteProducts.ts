
import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb"


export default async function getFavouriteProducts() {
    try {
        const currentUser = await getCurrentUser()

        if(!currentUser) return []

        const favs = await prisma.user.findMany({
            where: {
                id: {
                    in: [...(currentUser.favouriteIds || [])]
                }
            }
        })

       const SafeFavourites = favs.map((favourite: any)=> ({
        ...favourite,
        createdAt: favourite.createdAt.toISOString(),
       }))
        return SafeFavourites;
    } catch (error) {
        throw new Error()
    }
}