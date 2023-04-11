
import React from 'react'
import Box from './Box'
import boxes from './boxes'

function App() {



  const [squares, setSquares] = React.useState(boxes)

  function toggle(id){
    console.log(id)
    setSquares(prevSquares => {
      return prevSquares.map((square)=>{
        return square.id === id ? {...square, on: !square.on} : square

      })
    })
  }


  let allSquares = squares.map(square => {
    return(

      <Box
        key = {square.id}
        on = {square.on}
        id = {square.id}
        toggle={toggle}

    />

    )


  })







  return (
    <div>{allSquares}</div>
  );
}

export default App;
