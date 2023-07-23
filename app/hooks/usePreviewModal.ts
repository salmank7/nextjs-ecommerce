import {create} from 'zustand'
import { SafeProduct } from '../types'

interface PreviewModalStore {
    isOpen?: boolean
    data: SafeProduct | undefined
    onOpen: (data: SafeProduct) => void;
    onClose: ()=> void
};

const usePreviewModal  = create<PreviewModalStore>((set)=>  ({
    isOpen: false,
    data: undefined,
    onOpen: (data: SafeProduct) => set({data: data, isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default usePreviewModal;