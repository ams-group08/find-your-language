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
    componentDidMount() {
        this.scrollToTop()
    }
    render() {
        return <div>
            <div className="row justify-content-left">
                <div className="col-10">
                    <GraphTitle sourcename="StackOverFlow" ></GraphTitle>
                    <br></br>
                    <p className='text'>The Stack Overflow Network is a set of related Internet sites and other applications for questions and answers, owned and operated by Stack Exchange, Inc., a Delaware corporation.
                        Founded in 2008, Stack Overflow’s public platform is used by nearly everyone who codes to learn, share their knowledge, collaborate, and build their careers.
                        The main goal of the internet site is to build a library of detailed, high-quality answers to every question about programming. In order to ensure this, the site encourage programmers to make objective questions, that would tend to quality answers, which fulfill six ‘rules’: inspire answers that explain “why” and “how”; tend to have long, not short, answers; have a constructive, fair, and impartial tone; invite sharing experiences over opinions; insist that opinion be backed up with facts and references; and are more than just mindless social fun.
                        All questions are tagged with their subject areas. Each can have up to 5 tags, since a question might be related to several subjects. The analysis carried out through this project takes advantage of these tags to define whether a question is related to one or other particular programming language.</p>
                    <p className='text'>Each question has, among others, three number related to:</p>
                    <ul>
                        <li className='text'>Votes: it is possible to vote questions or posts. Users gain or lose reputation based on the quality of their interactions with the system and other community members. This aims people to focus on questions about an actual problem they are facing. They should include details about what they have tried and exactly what they are trying to do. It’s really important to avoid questions that are primarily opinion-based, or that are likely to generate discussion rather than answers.</li>
                        <li className='text'>Answers: the system keeps track of the number of answers associated with the question. Answers could also be voted. Good answers are voted up and rise to the top. The best answers show up first so that they are always easy to find</li>
                        <li className='text'>Views: it counts the number of times someone followed the site to read the question. This could be because this person is willing to answer it or he/she is just consulting its answer.</li>
                    </ul>
                    <p className='text'>The first idea was to get the data from the available Stack Overflow API, but in order to prevent abuse, the API implements a number of throttles and limits the daily requests, which by default is 10,000. In a quick check on the source, the most common programming language has over 2 million questions, so here the first problem was reached. Analyzing possible solutions the idea of web scraping became more and more feasible.
                        Web scraping, web harvesting, or web data extraction is data scraping used for extracting data from websites for later retrieval or analysis. It uses software to extract all the information available from the targeted site by simulating human behavior. This process can be done manually by a software user, using a bot or web crawler, or in this case, writing a script with different Python tools to make the scraping almost automatically. Within the different methods to scrap data, Beautiful Soup was implemented. This is a Python library that is used for web scraping purposes to pull the data out of HTML and XML files. It creates a parse tree from page source code that can be used to extract data in a hierarchical and more readable manner.
                        To summarize, this technique allowed us to get from every question, regarding a specific programming language, the date on which it was asked, the votes, the answers and the number of views it got.</p>
                    <SeeOurDocument link="https://github.com/ams-group08/find-your-language/blob/main/documentation/DS_STACKOVERFLOW.md"></SeeOurDocument>
                    <br></br>
                    <LineChart call="trends/stackoverflow" source="Stackoverflow" vaxistitle="Popularity Percentage"></LineChart>
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
