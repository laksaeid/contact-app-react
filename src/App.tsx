import {Form, Main, Modal} from "./components";
import {Container} from "./layout";
import {useState} from "react";
import {Forms, Contact} from "./Interfaces";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [formData, setFormData] = useState<Forms>({
        email: "",
        lastName: "",
        name: "",
        phone: "",
        relation: ""
    })
    const [editId, setEditId] = useState<number>(0)
    const [isEdit, setIsEdit] = useState(false)
    const [deleteModal, setDeleteModal] = useState<Contact>()

    const handleDelete = function (item: Contact) {
        setDeleteModal(item)
    }

    const confirmDelete = function () {
        setContacts((prev: Contact[]) => {
            let copy = [...prev]
            copy = copy.filter(contact => contact.id !== deleteModal?.id)
            return copy
        })
        setFormData({
            name: '',
            lastName: '',
            phone: '',
            email: '',
            relation: ''
        })
        setIsEdit(false)
        setDeleteModal(undefined)
        toast.error(deleteModal?.name + ' Deleted successfully')
    }

    const handleEdit = function (item: Contact) {
        setIsEdit(true)
        setFormData({
            email: item.email,
            lastName: item.lastName,
            name: item.name,
            phone: item.phone,
            relation: item.relation
        })
        setEditId(item.id)
    }

    const setContactsHandler = (x: Contact[]) => setContacts(x)
    return (
        <>
            <Container>
                <Form
                    setEditId={setEditId}
                    setContacts={setContactsHandler}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    contacts={contacts}
                    formData={formData}
                    setFormData={setFormData}
                    editId={editId}
                />
                <Main handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      contacts={contacts}
                />
            </Container>

            {deleteModal && <Modal deleteModal={deleteModal} onClick={confirmDelete} setDeleteModal={setDeleteModal}/>}

            <ToastContainer/>
        </>
    )
}

export default App
