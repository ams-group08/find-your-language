import React from 'react';
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Contributor(props) {
    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 1 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    })
    return (
        <animated.div className="card p-1 mb-3 border shadow rounded" style={{
            scale: x.to({
                range: [0,0.25, 0.50, 0.75, 1],
                output: [1, 1.02,1.03, 1],
            }),
        }} onMouseEnter={() => { toggle(!state) }}>
            <div className="card-body" >
                <h5 className="card-title d-flex justify-content-center" >{props.title} </h5>
                <p className="card-text d-flex justify-content-center">{props.name}</p>
            </div>
        </animated.div>
    );
}

export default Contributor;
