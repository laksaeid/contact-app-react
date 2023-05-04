// import Input from "../Input";
// import {FormEvent, useEffect, useRef, useState} from "react";
// import {Contact, Errors, Forms} from "../../Interfaces";
// import {toast} from 'react-toastify'
// // import {name} from "postcss";
//
// interface Props {
//     setContacts: (newState: Contact[]) => void
//     contacts: Contact[]
//     isEdit:boolean
//     setIsEdit:(x:boolean)=>void
//     setFormData:(x:Forms)=>void
//     formData:Forms
//     editId:number
//     setEditId:(x:number)=>void
// }
//
// const Form = ({setContacts, contacts, isEdit, setIsEdit, formData, setFormData, editId, setEditId}: Props) => {
//     const [errors, setErrors] = useState<Errors>({})
//     const [validForm,setValidForm]=useState(false)
//     const test = useRef(null)
//
//     // const [validForm,setValidForm] = useState(false)
//     // console.log(Object.keys(errors).length)
//     // useEffect(()=>{
//     //     Object.keys(errors).length === 0 && setValidForm(true)
//     // },[errors])
//     const validateEmail = (email: string) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }
//     const validatePhone = (number: string) => {
//         const regex = new RegExp("^(\\+98|0)?9\\d{9}$");
//         return regex.test(number);
//     }
//
//     const handleSubmit = function () {
//         console.log(formData)
//         const newContact = {
//             ...formData,
//             id: Date.now()
//         }
//         setContacts([...contacts, newContact])
//         toast.success("new contact added");
//     }
//     const valid = function(obj){
//         // console.log(test)
//         if (test.current.name.value.length < 3) obj.name = "invalid name"
//         if (!test.current.Lastname.value) obj.lastName = "enter your lastname"
//         if (!test.current.relation.value) obj.relation = "select relation"
//         if (!validatePhone(test.current.Phone.value)) obj.phone = "invalid phone number"
//         if (!validateEmail(test.current.email.value)) obj.email = "invalid email address"
//         if (!test.current.name.value) obj.name = "this field is required"
//         if (!test.current.Phone.value) obj.phone = "this field is required"
//         if (!test.current.email.value) obj.email = "this field is required"
//     }
//
//     useEffect(()=>{
//         console.log(formData.name)
//     },[errors])
//
//     const validation = function (e: FormEvent) {
//         e.preventDefault()
//
//         const errors: Errors = {}
//         if (formData.name.length < 3) errors.name = "invalid name"
//         if (!formData.lastName) errors.lastName = "enter your lastname"
//         if (!formData.relation) errors.relation = "select relation"
//         if (!validatePhone(formData.phone)) errors.phone = "invalid phone number"
//         if (!validateEmail(formData.email)) errors.email = "invalid email address"
//         if (!formData.name) errors.name = "this field is required"
//         if (!formData.phone) errors.phone = "this field is required"
//         if (!formData.email) errors.email = "this field is required"
//
//         setErrors(errors)
//
//         if (Object.keys(errors).length === 0 && !isEdit) handleSubmit()
//         if (Object.keys(errors).length === 0 && isEdit) saveEdit()
//
//        if(Object.keys(errors).length === 0){
//         setFormData({
//             name: '',
//             lastName: '',
//             phone: '',
//             email: '',
//             relation: ''
//         })
//         }
//
//     }
//     type key = keyof Errors
//
//     const removeErrorOnChange = function (key: key) {
//         setErrors((current: Errors) => {
//             const copy = structuredClone(current)
//             delete copy[key]
//             return copy
//         })
//     }
//
//     const saveEdit = function () {
//         toast.success("Contact Edited");
//         setIsEdit(false)
//         const copy:Contact[] = [...contacts]
//         const index = copy.findIndex(item => item.id === editId)
//         copy[index].name = formData.name
//         copy[index].email = formData.email
//         copy[index].phone = formData.phone
//         copy[index].lastName = formData.lastName
//         copy[index].relation = formData.relation
//         setContacts(copy)
//         setEditId(0)
//     }
//
//     // const checkValidForm = function(){
//     //     Object.keys(errors).length === 0 && setValidForm(true)
//     // }
//     // const nameValidation = function (str:string){
//     //     setTimeout(()=>{
//     //         if (str.length < 3) setErrors({...errors, name: "invalid name"})
//     //         // checkValidForm()
//     //     },1000)
//     // }
//     // const lastNameValidation = function (str:string){
//     //     setTimeout(()=>{
//     //         if (!str)setErrors({...errors,lastName: "enter your lastname"})
//     //         // checkValidForm()
//     //     },1000)
//     // }
//     // const relationValidation = function (str:string){
//     //     setTimeout(()=>{
//     //         if (!str)setErrors({...errors,relation: "select relation"})
//     //         // checkValidForm()
//     //     },1000)
//     // }
//     // const phoneValidation = function (str:string){
//     //     setTimeout(()=>{
//     //         const regex = new RegExp("^(\\+98|0)?9\\d{9}$");
//     //         if (!regex.test(str)) setErrors({...errors, phone: "invalid phone number"})
//     //     //     checkValidForm()
//     //     },1000)
//     //
//     // }
//     // const emailValidation = function (str:string){
//     //     setTimeout(()=>{
//     //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     //         if (!emailRegex.test(str)) setErrors({...errors, email: "invalid email address"})
//     //         // checkValidForm()
//     //     },1000)
//     //
//     //
//     // }
//     return (
//         <form onSubmit={validation} ref={test} className="flex flex-col gap-4 w-full sm:w-80 bg-slate-700 p-5">
//             <p className={'text-white pb-7'}>Add new contact</p>
//             <Input
//                 status={errors?.name}
//                 type={'text'}
//                 label={'name'}
//                 value={formData.name}
//                 onChange={(newVal) => {
//                     setFormData({...formData, name: newVal})
//                     // nameValidation(newVal)
//                     // const newErr:Errors = {}
//                     // if (newVal.length < 3) newErr.name = "invalid name"
//                     // setErrors({...errors,name : "invalid name"})
//                     removeErrorOnChange('name')
//                     setTimeout(()=>{
//                         setErrors(prevState => {
//                             const newObj:Errors=structuredClone(prevState)
//                             // delete newObj["name"]
//                             valid(newObj)
//                             Object.keys(newObj).length === 0 && setValidForm(true)
//                             // console.log(newObj)
//                             if(Object.keys(newObj).includes('name')){
//
//                             return {...prevState,name:"invalid name"}
//                             } else{
//                                return {...prevState}
//                             }
//
//                         })
//                     },1000)
//                 }}
//             />
//
//             <Input
//                 status={errors?.lastName}
//                 type={'text'}
//                 label={'Lastname'}
//                 value={formData.lastName}
//                 onChange={(newVal) => {
//                     setFormData({...formData, lastName: newVal})
//                     // lastNameValidation(newVal)
//                     removeErrorOnChange('lastName')
//                     setTimeout(()=>{
//                         setErrors(prevState => {
//                             const newObj:Errors=structuredClone(prevState)
//                             valid(newObj)
//                             Object.keys(newObj).length === 0 && setValidForm(true)
//                             // return {...prevState,lastName:"enter your lastname"}
//                             if(Object.keys(newObj).includes('lastName')){
//
//                                 return {...prevState,lastName:"enter your lastname"}
//                             } else{
//                                 return {...prevState}
//                             }
//
//                         })
//                     },1000)
//                 }}
//             />
//
//             <Input
//                 status={errors?.phone}
//                 type={'tel'}
//                 label={'Phone'}
//                 value={formData.phone}
//                 onChange={(newVal) => {
//                     setFormData({...formData, phone: newVal})
//                     // phoneValidation(newVal)
//                     removeErrorOnChange('phone')
//                     setTimeout(()=>{
//                         setErrors(prevState => {
//                             const newObj:Errors=structuredClone(prevState)
//                             valid(newObj)
//                             Object.keys(newObj).length === 0 && setValidForm(true)
//                             if(Object.keys(newObj).includes('phone')){
//
//                                 return {...prevState,phone:"invalid phone number"}
//                             } else{
//                                 return {...prevState}
//                             }
//
//                         })
//                     },1000)
//                 }}
//             />
//
//             <div className={"flex flex-col"}>
//                 <label htmlFor="relation" className={"text-white"}>relation</label>
//                 <select
//                     value={formData.relation}
//                     onChange={e => {
//                         setFormData({...formData, relation: e.target.value})
//                         // relationValidation(e.target.value)
//                         removeErrorOnChange('relation')
//                         setTimeout(()=>{
//                             setErrors(prevState => {
//                                 const newObj:Errors=structuredClone(prevState)
//                                 valid(newObj)
//                                 Object.keys(newObj).length === 0 && setValidForm(true)
//                                 if(Object.keys(newObj).includes('relation')){
//
//                                     return {...prevState,relation:"this field is required"}
//                                 } else{
//                                     return {...prevState}
//                                 }
//
//                             })
//                         },1000)
//                     }}
//                     id={"relation"}
//                     className={"rounded-lg"}>
//                     <option value="select" hidden={true}>select</option>
//                     <option value="family">family</option>
//                     <option value="friend">friend</option>
//                     <option value="Relatives">Relatives</option>
//                     <option value="Colleague">Colleague</option>
//                 </select>
//                 {errors?.relation && <p className={"text-left text-xs text-red-500 mt-1"}>please select relation</p>}
//             </div>
//
//             <Input
//                 status={errors?.email}
//                 type={'text'} label={'email'}
//                 value={formData.email}
//                 onChange={(newVal) => {
//                     setFormData({...formData, email: newVal})
//                     // emailValidation(newVal)
//                     removeErrorOnChange('email')
//                     removeErrorOnChange('phone')
//                     setTimeout(()=>{
//                         setErrors(prevState => {
//                             const newObj:Errors=structuredClone(prevState)
//                             valid(newObj)
//                             Object.keys(newObj).length === 0 && setValidForm(true)
//                             if(Object.keys(newObj).includes('email')){
//
//                                 return {...prevState,email:"invalid email address"}
//                             } else{
//                                 return {...prevState}
//                             }
//
//                         })
//                     },1000)
//                 }}/>
//
//             <button type="submit" disabled={!validForm} className={"bg-emerald-800 disabled:bg-gray-500 rounded-lg mt-5 py-2.5"}>{isEdit ? 'Edit' : 'Add'}</button>
//
//         </form>
//     );
// };
//
// export default Form;