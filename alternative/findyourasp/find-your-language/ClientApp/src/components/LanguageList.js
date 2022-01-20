import { map } from 'jquery';
import React, { Component } from 'react';
import Language from './Language';
export class LanguageList extends Component {

    populateLanages = () => {
        const itemslist = this.props.list.map((item,i)=> 
            <Language name={item} index={i}></Language>
        )
        return (itemslist)
    }
    render() {
        return <div>
            {this.populateLanages()}
        </div>;
    }
}

export default LanguageList;
