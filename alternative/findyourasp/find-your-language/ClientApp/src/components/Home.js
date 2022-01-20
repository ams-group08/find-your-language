import React, { Component } from 'react';
import LanguageList from './LanguageList';
import Sources from './Sources';

export class Home extends Component {
  static displayName = Home.name;
  render() {
    const languageList = ['javascript', 'java', 'python', 'typescript', 'c', 'c#', 'c++', 'kotlin', 'swift', 'php'] ;   

    return (
      <div>
        <p className='h4'>What to expect</p>
        <p>Basically we collected data from all sort of places and we made a conclusion based on the collected data of what are the top 10 languages.</p>


        <div className="row justify-content-center">
                <div className="col-6">
                    <br />
                    <h1 className="display-5 text p-1 m-2  d-flex justify-content-center" >Top 10  Languages</h1>
                    <br />
                    <div className="container border p-3 m-1">

                            <LanguageList list={languageList} ></LanguageList>


                    </div>
                    <br />
                    <p></p>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <h1 className="display-6 text m-3 p-2 d-flex justify-content-center" >Data Source</h1>
                    <br />
                    <Sources></Sources>
                </div>
            </div>
















      </div>
    );
  }
}
