import React, { Component } from 'react';
import GraphTitle from './GraphTitle';
import LineChart from './LineChart';
import SeeOurDocument from './SeeOurDocument';
import Sources from './Sources';

export class GraphStackoverflow extends Component {
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    componentDidMount(){
      this.scrollToTop()
    }
    render() {
        return <div>
            <div className="row justify-content-left">
                <div className="col-10">
                    <GraphTitle sourcename="StackOverFlow" ></GraphTitle>
                    <br></br>
                    <p className='text'>TStack Overflow is a question-and-answer website for professional and enthusiast programmers. It features questions and answers on a wide range of topics in computer programming. The website serves as a platform for users to ask and answer questions, and, through membership and active participation, to vote questions and answers up or down similar to Reddit and edit questions and answers in a fashion similar to a wiki. [1] What we want to do with this open-source information is to catch the questions regarding each language and extract also their date of creation, views, answers, and votes.</p>
                    <p className='text'>The first idea was to get the data from the available Stack Overflow API, but in order to prevent abuse, the API implements a number of throttles and limits the daily requests, which by default is 10,000.[2] In a quick check, the most common coding language has over 2 million questions, so we reach here the first problem. Analyzing possible solutions the idea of web scraping became more and more feasible.</p>
                    <p className='text'>Web scraping, web harvesting, or web data extraction is data scraping used for extracting data from websites for later retrieval or analysis.[3] It uses software to extract all the information available from the targeted site by simulating human behavior.[4] This process can be done manually by a software user, using a bot or web crawler, or in this case, writing a script with different Python tools to make the scraping almost automatically.[3] Within the different methods to scrap data, Beautiful Soup was implemented. This is a Python library that is used for web scraping purposes to pull the data out of HTML and XML files. It creates a parse tree from page source code that can be used to extract data in a hierarchical and more readable manner.[5]</p>
                    <SeeOurDocument link="https://github.com/ams-group08/find-your-language/blob/main/documentation/DS_STACKOVERFLOW.md"></SeeOurDocument>
                    <br></br>
                    <LineChart call="trends/stackoverflow" source="Stackoverflow"></LineChart>
                </div>
                <br />
                <div className="col-2">
                    <Sources exception="stackoverflow" width="100%" ></Sources>
                </div>
            </div>
        </div>
    }
}

export default GraphStackoverflow;
