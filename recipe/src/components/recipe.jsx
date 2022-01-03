import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Div, Divm} from "../styled/design";
import { FormInput } from "./FormInput";
import { RecipeItem } from "./RecipeItem";
import { CurrentRecipe } from "./CurrentRecipe";

export const Recipe =()=>{
    const [list,setlist] =  useState([])
    const[recipe,setRecipe] = useState()
    const [show,setShow] = useState(false)

    useEffect(()=>{
        getRecipe()
    },[])
    const handleSubmit = (data)=>{
        console.log("data in p",data)

        const payload = {
            data:data,
            id:nanoid(7)
        }
        // setlist([...list,payload])
        fetch("http://localhost:3001/recipe",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json"
            }
        }).then(()=>{
            getRecipe()
        })
        
    }
    const getRecipe = ()=>{
        fetch(`http://localhost:3001/recipe`)
        .then(d => d.json())
        .then(res =>{
            setlist(res)
        })
    }
    const handleData=(data)=>{
        console.log("data in form", data)
        setRecipe(data)
        setShow(true)
        }

        const sortListlowtohigh = ()=>{
            list.sort((a,b)=>{return a.data.duration - b.data.duration})
            console.log(list)
            var newlist = list
            setlist(newlist)
        }
        const sortListhightolow = ()=>{
            list.sort((a,b)=>{return b.data.duration - a.data.duration})
            console.log(list)
            var newlist = list
            setlist(newlist)
        }
    return(
        <>
        <Divm>
            <FormInput getData={handleSubmit}/>
            <Div>
                <button onClick={sortListlowtohigh}>Sort low to high</button>
                <button onClick={sortListhightolow}>Sort high to low</button>

                {
                    list.map((e,i)=>(
                        <RecipeItem key={e.id}{...e}/>
                    ))
                }
            </Div>
            </Divm>
            <div>
<h3>
    </h3>                
            </div>
            </>
    )
}