import React from 'react'


export default function Box (props){


    let styles = {

        backgroundColor:props.on ? "#222222" : "transparent"

}





return(
        <div
         className='Box'
         style={styles}
         onClick  = {()=>props.toggle(props.id)}
         >

         </div>
    )





}