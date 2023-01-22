import React from 'react'
import Herosec from "../Components/Herosec"
import Card from "../Components/Card"
import data from '../data';

// props: sending data from parent to child component

// bad - use loops: for, for in, foreach, white, do-while
// good - loop methods: map, filter, reduce

// foreach vs map in react
// foreach cannot handle return; "return x"
// map can handle return
// filter will remove undefined with list using "if" statement

export default function Home() {

  return (
    <div>
        <Herosec/>

        <h2 className="text-center text-white h1">Which iPhone is right for you?</h2>
        <div className="card_container mt-5">
        {
          data.map((val)=>{
            return <Card card_data={val}/>
          })
        }
        </div>
        
    </div>
  )
}
