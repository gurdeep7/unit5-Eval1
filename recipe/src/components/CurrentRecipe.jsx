import { useState } from "react"


export const CurrentRecipe = ({data})=>{
    const[recipe,setRecipe] = useState()


    return(
        <div>
            <h3>Recipe name: {data.title}
        <br/>
        Duration: {data.duration} Minutes
        </h3>
        <img
        src={data.link}
        ></img>
        </div>
    )
}