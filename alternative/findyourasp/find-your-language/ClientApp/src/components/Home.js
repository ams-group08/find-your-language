import React, { Component } from 'react';
import LanguageList from './LanguageList';
import Sources from './Sources';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    const languageList = ['Javascript', 'Java', 'Python', 'Typescript', 'C', 'C#', 'C++', 'Kotlin', 'Swift', 'Php'];
    const languageImagesList = ['Javascript', 'Java', 'Python', 'Typescript', 'C', 'Csharp', 'cplus', 'Kotlin', 'Swift', 'Php'];

    return (
      <div>
        <p className='h4'>What to expect</p>
        <p>The primary purpose of the project is to get data from various tech conglomerates to ascertain the popularity of programming languages over the last five years. The main objective is to be able to obtain enough data to observe the changes in popularity and be able to display the data in easy-to-understand graphs and charts.</p>
        <p>This is already a popular subject in the tech industry. The benefits of correctly anticipating trends pertain to large companies as well as individuals. Many industry leaders already provide their own interpretations of how programming languages are being used. These are often based on user surveys conducted by companies with a vested interest in knowing current trends and predicting upcoming changes to how programming languages are being used. Examples of such survey-based research into development language popularity include JetBrains’ <a href='https://www.jetbrains.com/lp/devecosystem-2021/'>State of Developer Ecosystem</a> and Stack Overflow’s <a href='https://insights.stackoverflow.com/survey/2021'>Developer Survey</a>.</p>
        <p>GitHub also provides a brief insight into programming language usage in their <a href='https://octoverse.github.com/'>State of the Octoverse.</a>
          While JetBrain’s and Stack Overflow provide interesting insights with their survey results, it is important to note that relying on surveys can be very unreliable. Users can provide very unreliable or inaccurate responses. The goal of this project is to look at language popularity based purely on how users interact with the selected sights (Reddit, Stack Overflow and Git Hub). Raw data from these sites, cleaned and analyzed, can provide a more accurate and ‘true’ measure of what are the most popular programming languages of recent years. This information can be a wonderful tool for individuals both currently in and hoping to join the tech industry, giving an idea of what language would be optimal to learn and how to direct their careers.</p>
        <div className="row justify-content-center">
          <div className="col-6">
            <br />
            <h1 className="display-5 text p-1 m-2  d-flex justify-content-center" >Top 10  Languages</h1>
            <br />
            <div className="container border p-3 m-1">
              <LanguageList list={languageList} imageList={languageImagesList} ></LanguageList>
            </div>
            <br />
            <p></p>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <h1 className="display-6 text m-3 p-2 d-flex justify-content-center" >Data Source</h1>
            <br />
            <Sources exception="" width="100%"></Sources>
          </div>
        </div>
      </div>
    );
  }
}
