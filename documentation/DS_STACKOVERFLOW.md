# Future Techies (data science)
Our project uses data from various tech conglomerates to ascertain the popularity of programming languages throughout history. Our goal is to be able to obtain enough data to see the changes in popularity and be able to put the data to use in easy-to-understand graphs and charts. This information will be a wonderful tool for individuals that would be looking at the tech industry, giving them an idea of what language would be optimal to learn.

Each member of the data science team is working with a different public data source. Cande will be looking at Stack Overflow, Srikar at Reddit, and Nadine at Github. The popularity is simply defined as how many times a coding language was mentioned in questions, practical works, posts, or repos, this depending on the website. We are also willing to be able to filter that in terms of stars, views, upvotes, answers, and times a repo is forked.
The coding languages, which were selected to do the analyses are Python, JavaScript, Java, C#, C, C++, Swift, PHP, Typescript, and Kotlin. Regarding the limitations we could face in getting the desired data and working with that later, the period that would be covered is 2017 to 2021.

Through this project, we are covering the following topics from the data science track: Python, Pandas, RegEx, Numpy, and Matplotlib. Machine learning would probably be used as long as we can get 'future' data. In order to acquire the raw data, we will be using some tools and libraries which were not covered in the study track including, Web Scraping, Request, BeatifulSoup, and use of APIs.

## Getting data from Stack Overflow
Stack Overflow is a question-and-answer website for professional and enthusiast programmers. It features questions and answers on a wide range of topics in computer programming. The website serves as a platform for users to ask and answer questions, and, through membership and active participation, to vote questions and answers up or down similar to Reddit and edit questions and answers in a fashion similar to a wiki. [1] What we want to do with this open-source information is to catch the questions regarding each language and extract also their date of creation, views, answers, and votes.

The first idea was to get the data from the available Stack Overflow API, but in order to prevent abuse, the API implements a number of throttles and limits the daily requests, which by default is 10,000.[2] In a quick check, the most common coding language has over 2 million questions, so we reach here the first problem. Analyzing possible solutions the idea of web scraping became more and more feasible.

Web scraping, web harvesting, or web data extraction is data scraping used for extracting data from websites for later retrieval or analysis.[3] It uses software to extract all the information available from the targeted site by simulating human behavior.[4] This process can be done manually by a software user, using a bot or web crawler, or in this case, writing a script with different Python tools to make the scraping almost automatically.[3] Within the different methods to scrap data, Beautiful Soup was implemented. This is a Python library that is used for web scraping purposes to pull the data out of HTML and XML files. It creates a parse tree from page source code that can be used to extract data in a hierarchical and more readable manner.[5]

After reading and watching videos to get to know the tool and how to use it, we started to build our own scraper. A block from useful libraries had to be installed and imported:
```python
import requests                   # to get html from a page
from bs4 import BeautifulSoup     # library to do scraping in Python
import pandas as pd               # to read end work with csv files
import time                       # to slow down scraping 
import re                         # to get data in the desire format
import os                         # to interact with the operating system      
```

A list of the different steps regarding the web scraping process is detailed below.

#### Get the HTML document tree

```python
stackof_url = 'https://stackoverflow.com/questions/tagged/' + coding_language + '?page='
uClient = requests.get(stackof_url + str(current_page))
soup = BeautifulSoup(uClient.text, 'html.parser')
print(soup.prettify())
```
The Stack OverFlow URL consists of a three-element concatenation in order to be able later to scrap through an array of coding languages and their vast number of pages.
As a result of this piece of code, we are able to read in a 'pretty' way the whole Html document tree from the page and recognize the useful lines in terms of our goals. We complement this with the 'inspect' tool in the browser. 

#### Get the raw data
For each topic, Stack OverFlow displays a list with a maximum of 50 questions per page. We define a 'containers' as the table which contains all those questions. We are willing to extract the date, views, answers, and votes from each question in that table, which will be 'container in containers.

```python
containers = soup.find('div', {'id':'questions'}).findAll('div', {'class':'mln24'})

for container in containers:

	date_container = container.findAll('span', {'class':'relativetime'})
    date = date_container[0]

    views_container = container.findAll('div', {'class':'views'})
    views = views_container[0]

    answers_container = container.findAll('div', {'class':'status'})
    answers = answers_container[0]
    
    votes_container = container.findAll('span', {'class':'vote-count-post'})
    votes = votes_container[0]

``` 

#### Clean the raw data
The following answer is derived as we run the previous code:

```python
>> <span class="relativetime" title="2021-12-22 17:14:03Z">1 hour ago</span>
<div class="views " title="13 views">
    13 views
</div>
<div class="status unanswered">
<strong>0</strong>answers
            </div>
<span class="vote-count-post "><strong>0</strong></span>
```

##### -date data
The class 'relative time' has two options, we can get the conventional date, yyyy-mm-dd hh:mm:ss or the relative time that counts back from the moment you are doing the scraping, for example, 1 hour ago. By adding 'title' to the desired answer, we can easily get the conventional date (check the last code line).
```python
date_container = container.findAll('span', {'class':'relativetime'})
date = date_container[0]['title']

>> 2021-12-22 17:14:03Z
```
##### -views data
With .text.split() we can slice the answer, and calling the first element we just keep the number of views. Some questions have more than a thousand views, and this is displayed as '1k'. We add a replace method in order to transform those 'k' in '000'.
```python
views_container = container.findAll('div', {'class':'views'})
views = views_container[0].text.split()[0].replace('k','000')

>> 13
```
##### -answers data
We use .text and regular expressions  to get only the number of answers the question has. .split() can not be used here because the number of answers and the word 'answers' come together. As we do in 'views' we add a replace method in order to transform the possible 'k' from a thousand answers in '000'.

```python 
answers_container = container.findAll('div', {'class':'status'})
answers = answers_container[0].text    
answers = (re.findall('\d+', answers)[0]).replace('k','000')

>> 0
```
##### -votes data
This data does not need too much work, we just add .text and get the number of views.
```python
votes_container = container.findAll('span', {'class':'vote-count-post'})
votes = votes_container[0].text

>> 0 
```
### Limit the iterations
We can limit the number of iterations using a while loop. We run the for-in cycle as long as two conditions result true: the scraping should not go beyond the year 2017 and it must end at the maximum page for that coding language, while it is included in the year range 2017–2021.
We define `min_year`, `current_year` and `current_page` with the values 2017, 2021 and 1 respectivly.
The maximum number of pages is obtained through web scraping. And we write the code in a try/except block to be sure it won't blow as it tries to continue beyond the maximum number of pages of any particular coding language. In each iteration, the current page adds one unit. The for-in cycle will start at page number 1, it will go through page number two and it will end at the maximum number of pages.
Regarding the other condition, the loop will start with the year 2021 and in each iteration, it will decrease in terms of date (as the questions are in chronological order). It will stop when comparing the `current_year` of the scraped page with the defined `min_year` results false. The current year will change in each cycle and the recorded number will be the year of the last scraped question in the current scraped page.
With this arrange it is possible we do read data before 2017. Imagine a coding language with fifty questions on a page. The first 45 questions are included in the year range 2017–2021 but the last questions happened to be asked in 2016. The `current year` resulting in that cycle would be 2016 and, as the first condition of the following while loop would not be true, it would stop the scraping process, but 5 questions with their respective information: date, views, answers, and votes, would be scrapped. We can minimize this extra data by adding a new condition within the for/in cycle. The data that will be printed, and later added to our data frame, only includes registers till 2017.

#### -cleaning max_page
As it was mentioned before, the number of the maximum page is scraped using the findAll function. The list of page numbers, and also 'Next', that are commonly displayed at the end of the page belongs to the class 's-pagination--item js-pagination-item'. Calling the element [-2] we get the last page number. As we are willing to compare this number with `current_page`, we must convert it to an integer.

#### -cleaning current_year
To get the `current_year` in each iteration in order to compare it with the `min_year`, we look at the last element of the page that responds to the class 'relativetime', that is why we call an [-1] element, and from its 'title' (see Clean the raw data: -date data), we take the first four elements writing.

```python
min_year = 2017
current_year = 2021
current_page = 1 

stackof_url = 'https://stackoverflow.com/questions/tagged/' + coding_language + '?page='
uClient = requests.get(stackof_url + str(current_page))
soup = BeautifulSoup(uClient.text, 'html.parser')

try:
      max_page = int(soup.findAll('a', {'class' : 's-pagination--item js-pagination-item'})[-2].text)
except:
      max_page = current_page

while current_year >= min_year and current_page <= max_page:

	uClient = requests.get(stackof_url + str(current_page))
    soup = BeautifulSoup(uClient.text, 'html.parser')
    containers = soup.find('div', {'id':'questions'}).findAll('div', {'class':'mln24'})
      
    for container in containers:
        date_container = container.findAll('span', {'class':'relativetime'})
        date = date_container[0]['title']

        views_container = container.findAll('div', {'class':'views'})
        views = views_container[0].text.split()[0].replace('k','000')

        answers_container = container.findAll('div', {'class':'status'})
        answers = answers_container[0].text 
        answers = (re.findall('\d+', answers)[0]).replace('k','000')

        votes_container = container.findAll('span', {'class':'vote-count-post'})
        votes = votes_container[0].text

    if (int(date[0:4]) >= min_year): 
    print(coding_language + ' , ' + date + ' , ' + views +' , ' + answers +' , ' + votes +'\n')

current_page += 1 
current_year =int(soup.findAll('span', {'class':'relativetime'})[-1]['title'][0:4])
```
### Scraping trought a list of coding languages
In order to repeat the previously detailed process in each of the desired coning languages, we create a list of elements named `coding_languages`, and using a for/in cycle we extract the date, views, answers, and votes from each question of every coding language.

```python
coding_languages = ['javascript', 'java', 'python','c#', 'kotlin', 'typescript', 'php', 'swift', 'c++', 'c']

for coding_language in coding_languages:
    
    min_year = 2017
    current_year = 2021
    current_page = 1 

    stackof_url = 'https://stackoverflow.com/questions/tagged/' + coding_language + '?page='
    uClient = requests.get(stackof_url + str(current_page))
    soup = BeautifulSoup(uClient.text, 'html.parser')

    try:
      max_page = int(soup.findAll('a', {'class' : 's-pagination--item js-pagination-item'})[-2].text)
    except:
      max_page = current_page 
    
    while current_year >= min_year and current_page <= max_page:

        stackof_url = 'https://stackoverflow.com/questions/tagged/' + coding_language + '?page='
        uClient = requests.get(stackof_url + str(current_page))
        soup = BeautifulSoup(uClient.text, 'html.parser')

      containers = soup.find('div', {'id':'questions'}).findAll('div', {'class':'mln24'})
      
      for container in containers:
          date_container = container.findAll('span', {'class':'relativetime'})
          date = date_container[0]['title']

          views_container = container.findAll('div', {'class':'views'})
          views = views_container[0].text.split()[0].replace('k','000')

          answers_container = container.findAll('div', {'class':'status'})
          answers = answers_container[0].text 
          answers = (re.findall('\d+', answers)[0]).replace('k','000')

          votes_container = container.findAll('span', {'class':'vote-count-post'})
          votes = votes_container[0].text

          if (int(date[0:4]) >= min_year): 
            print(coding_language + ' , ' + date + ' , ' + views + ' , ' + answers + ' , ' + votes +'\n')
                     
      current_page += 1 
      current_year =int(soup.findAll('span', {'class':'relativetime'})[-1]['title'][0:4])
``` 

### Create a csv file
In order to visualize the desired data in a data frame, we create a csv document with five columns. We are going to stock in the new file the name of the coding language, the date, the views, the answers, and the votes from each scraped question.
We add an if clause that adds the column names when the document starts from scratch
Hola maychi como e
Each row is added to the file with the .write method. We include this line in the if clause that only prints and adds data between 2017 and 2021 (see 'Limit the iterations').   

```python
filename = 'codinglanguages.csv'
file = open(filename,'a')
  if os.stat(filename).st_size == 0 :
    columns_names = 'Coding_Languages, Date, Views, Answers, Votes\n'        
    file.write(columns_names)
```

### Read a csv file
In order to read the created csv file, we use the .read function in Pandas. With the print statements, we can get general information about the data frame such as the first and last records, its shape, the name of the columns, and data type.
```python
df_coding_languages = pd.read_csv('codinglanguages01.csv')
print(df_coding_languages)
print(df_coding_languages.shape)
print(df_coding_languages.columns)
print(df_coding_languages.info())
``` 

### Define a function
Last but not least we include all the previous items in the defined function scrap_sof().

```python
coding_languages = ['javascript', 'java', 'python','c#', 'kotlin', 'typescript', 'php', 'swift', 'c++', 'c']

def scrap_sof():

  filename = 'codinglanguages.csv'
  f = open(filename,'w')
  columns_names = 'Coding_Languages, Date, Views, Answers, Votes\n'        
  f.write(columns_names)

  for coding_language in coding_languages:
    
    min_year = 2017
    current_year = 2021
    current_page = 1 
    
    stackof_url = 'https://stackoverflow.com/questions/tagged/' + coding_language + '?page='
    uClient = requests.get(stackof_url + str(current_page))
    soup = BeautifulSoup(uClient.text, 'html.parser')

    try:
      max_page = int(soup.findAll('a', {'class' : 's-pagination--item js-pagination-item'})[-2].text)
    except:
      max_page = current_page 
    
    while current_year >= min_year and current_page <= max_page:
      
      stackof_url = 'https://stackoverflow.com/questions/tagged/' + coding_language + '?page='
      uClient = requests.get(stackof_url + str(current_page))
      soup = BeautifulSoup(uClient.text, 'html.parser')

      containers = soup.find('div', {'id':'questions'}).findAll('div', {'class':'mln24'})
      
      for container in containers:
          date_container = container.findAll('span', {'class':'relativetime'})
          date = (date_container[0]['title'])

          views_container = container.findAll('div', {'class':'views'})
          views = views_container[0].text.split()[0].replace('k','000')

          answers_container = container.findAll('div', {'class':'status'})
          answers = answers_container[0].text 
          answers =  re.findall('\d+', answers)[0].replace('k','000')

          votes_container = container.findAll('span', {'class':'vote-count-post'})
          votes = votes_container[0].text

          if (int(date[0:4]) >= min_year): 
            print(coding_language + ' , ' + date + ' , ' + views + ' , ' + answers + ' , ' + votes +'\n')
            f.write(coding_language + ' , ' + date + ' , ' + views + ' , ' + answers + ' , ' + votes +'\n')
         
      current_page += 1 
      current_year =int(soup.findAll('span', {'class':'relativetime'})[-1]['title'][0:4])
      time.sleep(10) # sleep before scraping next page to not send too many requests at once          
```

### Miscellaneous

      time.sleep(10) # sleep before scraping next page to not send too many requests at once  