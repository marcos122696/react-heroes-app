import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <div>
        <h1 className="animate__animated animate__hinge">
            DcScreen
        </h1>
        <hr />
        
        <HeroList publisher='DC Comics'/>
    </div>
  )
}
