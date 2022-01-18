import requests                     # to get html from a page
from bs4 import BeautifulSoup       # library to do scraping in Python
import time                         # to slow down scraping to keep server happy 
import csv

#https://github.com/search?p=4&q=python&type=Repositories             #with page
#https://github.com/search?p=2&q=javascript&type=Repositories
#https://github.com/search?p=&q=python&type=Repositories              #without page


def scrap_github():
    myheaders = ['date','language','stars']
    languages = ['javascript', 'java', 'python', 'typescript', 'c', 'c#', 'c++', 'kotlin', 'swift', 'php']
    
    with open('./gitHubScrapResults.csv', mode='w', newline='') as myfile:
        writer = csv.DictWriter(myfile, fieldnames=myheaders)
        writer.writeheader()

        for coding_language in languages:
            current_page = 1 
            max_page = 100
            print(coding_language)
        
            while current_page <= max_page:
                github_url = 'https://github.com/search?p=' + str(current_page) +'&q=' + coding_language + '&type=Repositories'
                uClient = requests.get(github_url)
                soup = BeautifulSoup(uClient.text, 'html.parser')
                if (soup is not None):
                    initial_containers = soup.find('ul', {'class':'repo-list'})
                else:
                    current_page += 1 
                    continue

                if (initial_containers is not None):
                    containers = initial_containers.findAll('li', {'class':'repo-list-item hx_hit-repo d-flex flex-justify-start py-4 public source'})
                else:
                    current_page += 1 
                    continue

                for container in containers:
                    
                    if container:
                        stars_container = container.findAll('a', {'class':'Link--muted'})
                        if (stars_container and stars_container is not None):
                            stars = stars_container[0].text
                            date_container = container.findAll('relative-time')
                            date = (date_container[0]['datetime'])
                            row = {"date": date.strip(), "language": coding_language.strip(), "stars": stars.strip()}
                            print(row)

                            writer.writerow(row)
           
                current_page += 1 
                print(current_page)
                time.sleep(6)

scrap_github()