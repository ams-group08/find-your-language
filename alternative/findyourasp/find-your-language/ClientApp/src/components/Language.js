import React from 'react';
import {Card } from 'reactstrap';
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Language (props) {
  const [state, toggle] = useState(true)

  const { x } = useSpring({
      from: { x: 1 },
      x: state ? 1 : 0,
      config: { duration: 1000 },
  })
  const handleHover = (e)=>{
    toggle(!state)
  }
    return( <animated.div  style={{
      scale: x.to({
          range: [0, 0.25, 0.50, 0.75, 1],
          output: [1, 1.02, 1.03, 1],
      }),
  }} onMouseEnter={ handleHover} >
        <Card body className='border click'  >{props.index+1}. {props.name}</Card>
    </animated.div>);
}

