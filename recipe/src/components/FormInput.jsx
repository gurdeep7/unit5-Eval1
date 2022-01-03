import { useState } from "react";
import {nanoid} from "nanoid"
import { Form } from "../styled/design";
export const FormInput = ({getData})=>{

    const [form,setForm] = useState({
        title:"",
        duration:""
    })

    const [list,setlist] =  useState([])

    const handleChange = (e) =>{
        console.log(e.target.name,e.target.value)
        const{name,value}= e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = (data)=>{
        data.preventDefault()
        console.log("data in p",data)

        const payload = {
            data:form,
            id:nanoid(7)
        }
        setlist([...list,payload])
        getData(form)
        console.log(list)
        return
    }

    return(
        <Form onSubmit={handleSubmit}>
        <h1>
            Add A recipe
        </h1>
        <input onChange={handleChange} type="text" name="title" placeholder="Recipe Name"/>
        <input onChange={handleChange} type="number" name="duration" placeholder="Duration minutes"/>
        <input onChange={handleChange} type="text" name="link" placeholder="Image Link"/>
        <input type="submit" value="submit" onSubmit={handleSubmit}/>
        </Form>
    )

}