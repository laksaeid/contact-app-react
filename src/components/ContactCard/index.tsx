import IonIcon from "@reacticons/ionicons";
import {Contact} from "../../Interfaces";

interface Props {
    contact: Contact
    handleDelete:(item:Contact)=>void
    handleEdit:(item:Contact)=>void
}

const ContactCard = ({contact,handleDelete,handleEdit}: Props) => {
    return (
        <>
            <div className={'bg-slate-400 p-3 text-sm space-y-3 rounded-xl w-52'}>
                <div className={'flex items-baseline gap-2'}>
                    <p className={'flex-1'}>{contact.name} {contact.lastName}</p>
                    <IonIcon className={"hover:text-blue-600 cursor-pointer"} onClick={()=>handleEdit(contact)} name={'create-outline'}/>
                    <IonIcon className={"hover:text-red-600 cursor-pointer"} onClick={()=> handleDelete(contact)} name={'trash-outline'}/>
                </div>
                <p>{contact.phone}</p>
                <p>{contact.relation}</p>
                <p>{contact.email}</p>
            </div>
        </>
    );
};

export default ContactCard;