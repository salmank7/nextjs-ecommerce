import prisma from '@/app/libs/prismadb';


export default async function getProducts(){
    try {
        const products = prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            },
        });

        if(!products) return null;

        return products

    } catch (error) {
        console.log(error)
    }
}