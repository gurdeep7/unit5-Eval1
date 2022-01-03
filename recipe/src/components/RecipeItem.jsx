import { useState } from "react"
import { Divr } from "../styled/design"
import { CurrentRecipe } from "./CurrentRecipe"

export const RecipeItem = ({data, getRecipe})=>{
    const[recipe,setRecipe] = useState()
const handleData=()=>{
setRecipe(data)
//console.log(recipe)
}
    return <Divr onClick={handleData}>
        <h3>Recipe name: {data.title}
        <br/>
        Cooking Time: {data.duration} Minutes
        </h3>
        <img
        src={data.link}
        ></img>

    </Divr>
}