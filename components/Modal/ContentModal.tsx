import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleModal } from "@/redux/modalSlice"

export default function ContentModal({children, nameModal} : {children : React.ReactNode, nameModal : string}) {
    const dispatch = useAppDispatch()
    const {status,name} = useAppSelector((state) => state.modal)
    return (
        <div>
            {status && name === nameModal && (
                 <div className="fixed top-0 bottom-0 right-0 left-0 bg-overlay z-[100]">
                 <div className="absolute top-0 right-0 bottom-0 left-0" onClick={() => dispatch(toggleModal(nameModal))}>
     
                 </div>
                 <div className="w-full h-full">
                     {children}
                 </div>
             </div>
            )}
        </div>
    )
}