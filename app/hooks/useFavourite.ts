import { useRouter } from "next/navigation";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


interface IUseFavourite {
    productId: string,
    currentUser?: SafeUser | null
}

const useFavourite = ({productId, currentUser}: IUseFavourite) => {
    const router = useRouter()
    const loginModal = useLoginModal()

    const hasFavourited = useMemo(()=> {
        const list = currentUser?.favouriteIds || [];

        return list.includes(productId)
    }, [currentUser, productId])


    const toggleFavourite = useCallback(async (e: React.MouseEvent<HTMLDivElement>)=> {
        e.stopPropagation();


        if(!currentUser) {
            return loginModal.onOpen();
        }
        try {
            let request;

            if(hasFavourited){
                request = () => axios.delete(`/api/favourites/${productId}`);
                toast.success("Removing  from favourites");

            } else {
                request = () => axios.post(`/api/favourites/${productId}`);
                toast.success("Adding to favourites");

            }
            await request();
            toast.success("success")
            router.refresh()

        } catch (error) {
            toast.error("something went wrong");
        }

    },[currentUser, hasFavourited, productId, loginModal, router])


    return {
        hasFavourited,
        toggleFavourite
    }
}

export default useFavourite;