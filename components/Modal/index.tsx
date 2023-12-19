import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleModal } from "@/redux/modalSlice"
import 'animate.css';
export default function ContentModal({ children, nameModal }: { children: React.ReactNode, nameModal: string }) {
    const dispatch = useAppDispatch()
    const { status, name } = useAppSelector((state) => state.modal)
    return (
        <div>
            {status && name === nameModal && (
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-overlay z-[100] animate_animated animate__fadeIn  ">
                    <div className="absolute top-0 right-0 bottom-0 left-0 " onClick={() => dispatch(toggleModal(nameModal))}>

                    </div>
                    <div className={`w-full h-full animate__animated ${status ? 'animate__bounceInRight' : 'animate__bounceOutRight '} `}>

                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}