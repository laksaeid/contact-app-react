import './modal.css'
import {Contact} from "../../Interfaces";

interface Props{
    setDeleteModal:(x:undefined)=>void
    onClick:()=>void
    deleteModal:Contact
}
const Modal = ({setDeleteModal,onClick,deleteModal}:Props) => {

    return (
        <div className={"fixed w-screen h-screen top-0 left-0 grid place-items-center backdrop-blur-sm modal-animation"}>
            <div className={"bg-slate-900 p-5 rounded-xl text-white w-72 text-center "} >
                <p className={"border-b pb-5"}>Are you sure to Delete <strong className={"text-amber-500"}>{deleteModal.name}</strong> ?</p>
                <div className={"space-x-4 mt-5"}>
                    <button onClick={()=>onClick()} className={"bg-emerald-800 px-4 rounded-md"}>Yes</button>
                    <button onClick={()=>setDeleteModal(undefined)} className={"bg-red-800 px-4 rounded-md"}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;