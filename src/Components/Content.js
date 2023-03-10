import React from 'react'
import Part from "./Part";


const Content = ({parts}) => {
    return (
      <div>
        {
          parts.map(x => {
            console.log(x.id, x.name, x.exercises)
            return (
             <Part key = {x.id} part = {x}/>
            )
          })
        }
        </div>
    )
  }

export default Content