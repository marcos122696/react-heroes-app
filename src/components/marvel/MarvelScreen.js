import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <div>
        <h1 className="animate__animated animate__hinge">
            MarvelScreen
        </h1>
        <hr />

        <HeroList publisher='Marvel Comics'/>
    </div>
  )
}
