import React from 'react';
import Language from './Language';


export default function LanguageList(props) {
   
    const populateLanages = () => {
        const itemslist = props.list.map((item, i) =>
            <Language name={item} index={i} key={i} ></Language>
        )
        return (itemslist)
    }
        return <div>
            {populateLanages()}
        </div>;
    
}
