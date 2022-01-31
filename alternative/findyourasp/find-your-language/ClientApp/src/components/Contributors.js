import React from 'react'
import Contributor from './Contributor'

export default function Contributors() {
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <br />
                <h1 className="display-5 text p-1 m-2  d-flex justify-content-center" >Project Purpose </h1>
                <br />
                <div className="card border p-4 m-2">
                    <div className="card-body">
                        <h6>Summary</h6>
                        <p>Our project uses data from various tech conglomerates to ascertain the popularity of programming languages throughout history. Our goal is to be able to obtain enough data to see the changes in popularity and be able to put the data to use in easy-to-understand graphs and charts. This information will be a wonderful tool for individuals that would be looking at the tech industry, giving them an idea of what language would be optimal to learn.</p>
                        <p>Each member of the data science team is working with a different public data source. Cande will be looking at Stack Overflow, Srikar at Reddit, and Nadine at Github. The popularity is simply defined as how many times a coding language was mentioned in questions, practical works, posts, or repos, this depending on the website. We are also willing to be able to filter that in terms of stars, views, upvotes, answers, and times a repo is forked. The coding languages, which were selected to do the analyses are Python, JavaScript, Java, C#, C, C++, Swift, PHP, Typescript, and Kotlin. Regarding the limitations we could face in getting the desired data and working with that later, the period that would be covered is 2017 to 2021.</p>
                        <p>Through this project, we are covering the following topics from the data science track: Python, Pandas, RegEx, Numpy, and Matplotlib. Machine learning would probably be used as long as we can get 'future' data. In order to acquire the raw data, we will be using some tools and libraries which were not covered in the study track including, Web Scraping, Request, BeatifulSoup, and use of APIs.</p>
                        <h6>How the data was collected</h6>
                        <p>Web scraping, web harvesting, or web data extraction is data scraping used for extracting data from websites for later retrieval or analysis.[3] It uses software to extract all the information available from the targeted site by simulating human behavior.[4] This process can be done manually by a software user, using a bot or web crawler, or in this case, writing a script with different Python tools to make the scraping almost automatically.[3] Within the different methods to scrap data, Beautiful Soup was implemented. This is a Python library that is used for web scraping purposes to pull the data out of HTML and XML files. It creates a parse tree from page source code that can be used to extract data in a hierarchical and more readable manner</p>
                    </div>
                </div>
                <br />
                <p></p>
            </div>
            <div className="col-1"></div>
            <div className="col-4">
                <h1 className="display-6 text m-3 p-2 d-flex justify-content-center" >Contributors</h1>
                <br />
                <Contributor title="Fullstack" name="Ehab Omar"></Contributor>
                <Contributor title="Data Science" name="Cande Funes" ></Contributor>
                <Contributor title="Data Science" name="Nadine Grant" ></Contributor>
                <Contributor title="Data Science" name="Srikar Narayan" ></Contributor>
                <Contributor title="UX/UI" name="Candace Staats" ></Contributor>
            </div>
        </div >
    );
}


