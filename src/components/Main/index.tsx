import {Contact} from "../../Interfaces";
import {ContactCard} from "../index.ts";

interface Props {
    contacts: Contact[]
    handleDelete:(x:Contact)=>void
    handleEdit:(x:Contact)=>void
}

const Main = ({contacts , handleDelete,handleEdit}: Props) => {
    return (
        <main className={'flex-1 order-first sm:order-2 p-5 h-full flex flex-col gap-10'}>
            <h1 className={'text-center text-white text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-300'}>Contacts
                App</h1>
            <div className={'w-full border rounded-xl flex-1 bg-slate-700'}>
                <p className={'text-white font-semibold p-3 border-b'}>Your Contacts</p>
                <div className={'p-3 flex flex-wrap gap-4 justify-center md:justify-between xl:justify-evenly'}>

                    {contacts && contacts.map((contact: Contact) => <ContactCard handleEdit={handleEdit} handleDelete={handleDelete} key={contact.id} contact={contact}/>)}

                </div>
            </div>
        </main>
    );
};

export default Main;