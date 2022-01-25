## Getting data from GitHub

GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.

Professional and hobby developers use Github as a repository for their code. By looking at how the languages of interest are used in public projects it should be possible to provide a measure of how popular these languages are in real-world applications.

The [GitHub Rest API](https://docs.github.com/en/rest) was chosen to access this information. Fields of interest relate to how often the repositories are "watched", "starred" and "forked".

Stars: Starring makes it easy to find a repository or topic again later. Generally a developer will star repositories and topics to keep track of projects they find interesting.Many of GitHub's repository rankings depend on the number of stars a repository has.

Watch: When a developer chooses to watch a project, they will be notified whenever there are any updates. This is difference from the "star" system which does not provide notifications. Again, this is a good metric of how often other users are taking an interest or using a repo frequently enough that they require updates on any changes.

Fork: A fork is a copy of a repository. Forking a repository allows a developer to freely experiment with changes without affecting the original project. Again, this is an excellent indication of how frequently the code base and thus language is being actively used by developers.

The code to get the data from the GitHub API is visible in `dataScience/githubScript.py`. Below is a brief breakdown of how it worked.

### 1. Accessing the GitHub API

To use the GitHub API to its full potential it was necessary to generate a personal access tokens (PAT) via my GitHub account. For security reasons this token is not revealed. Locally I stored the token in an environment variable using the `os` library. The token was stored in the command line using:

```bash
export TOKEN='token_value'
```

and accessed in the script using.

```python
token = os.getenv('TOKEN')
headers = {'Authorization': f'token {token}'}
```

### 2. Getting the raw data from GitHub API

The API call was made as followed.

```python
    query = 'q=' + requests.utils.quote('created:>=' + '2017-01-01')
    url = f"https://api.github.com/search/repositories?{query}&page={page}"

    response = requests.get(url, headers=headers)
    response_dict = json.loads(response.content)

    page = page + 1
```

This returned 30 entries at a time. This code was placed in a `while-loop` which repeated the call until no data was returned.

### 3. Storing the raw data in a csv

Finally the data was read into a csv file that can later be accessed via Google CoLabs to carry out the analysis of the results:

```python
items = response_dict['items']
with open('./gitHubAPIResults.csv', mode='a', newline='') as myfile:
    writer = csv.DictWriter(myfile, fieldnames=myheaders)
    writer.writeheader()
    writer.writerows(items)
```

### 4. Cleaning the data and analysis

These steps were carried out in a Google CoLab notebook with accompanying annotations.

### 5. Summary of results for GitHub API

Unfortunately following cleaning of the data and the beginning of analysis it was determined that there was not sufficient entries in the GitHub API data to produce meaning full results. The GitHub API returned very limited results - only about 990 maximum before the any cleanup. This number was further reduced when entries with either non desired languages or language as NaN were dropped. The types of languages returned by there API were diverse enough to provide entries for each language type. This initially looked promising. While the amount of data was small, if there was enough data for each language than some form of analysis could be carried out. However, this fell apart when the quantity of data was examined over the years selected (2017-2021). As the sampling was limited and random, not every language had entries for each year. Some, such as C, C#, Kotlin, and PHP, had data for only two years. For the purposes of analysing the changes in programming language popularity over the course of a given time frame, having some years with no data is unacceptable. For that reason further analysis of the GitHub API data was abandoned.

One area of interest that is worth commenting on is the results of fork count versus stars/watchers (these refer to the same metric). When a user stars a repository it is the same as bookmarking (to easily revisit it). It denotes interest in the repository but not necessarily that it is being used. When a user forks a repository, these indicates the intention to actually use/change/interact with the code. So number of forks can be viewed as an excellent indicator of code that is actually being used. It was interesting to note in the data available that for languages with sufficient data, the distribution of forks and watchers tracked fairly well. Languages with a large amount of interaction (Python, JavaScript, Java) all displayed a very similar right skew in their fork and watcher distribution plots. This is very valuable as in later analysis it was possible to look at only the star counts. Based on these results it could be inferred that the popularity based on fork counts would be similar.

### 6. Scrapping GitHub

To get a larger sample of data, scrapping of GitHub was attempted. This was reasonably successful. It yielded a larger data set (~1000 entries per language) with sufficient languages entries per year to conduct analysis. Scrapping was done using a Python script implementing the library Beautiful Soup. Beautiful soup allows the user to pull data out of HTML and XML files. It creates a parse tree from page source code that can be used to extract data in a hierarchical and more readable manner. The GitHub search page was scrapped. By changing the language query it was possible to loop over the pages for each of the desired languages. Within the language, the page number was changed allowing the script to loop over the 100 pages of results, pulling 10 entries per page.

The Beautiful Soup library was used as follows:

```python
   while current_page <= max_page:
       github_url = 'https://github.com/search?p=' + str(current_page) +'&q=' + coding_language + '&type=Repositories'
       uClient = requests.get(github_url)
       soup = BeautifulSoup(uClient.text, 'html.parser')
```

Scrapping GitHub was extremely flakey. If a repository didn't have any stars (this occasionally happened) the script would fail. After about 2000 entries had been scrapped the script became unreliable (it would skip large swathes entries) and would eventually crash. No more than 5000 entries could be scrapped a day before it was no longer possible to run the script and get results. To help combat these restrictions the results for two languages at a time were extracted. In addition, error conditions were added to the script so that one failure would not end the scrapping session (which would require either restarting or altering the script to pick up where it left off - this was undesirable as it would have to be repeatedly altered throughout the process).

```python
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
```

The `if`-statements check that a results has been obtained. If no results was obtained the `else`-statement allows the scrapping to continue to the next entry/page without the script terminating.

The pages scrapped were the the result of searching for the language name in the search bar. The result consists of 100 pages with 10 entries per page, listing public repositories written in the searched language. In the script these pages are accessed by interpolating the language (looping over a list of the languages to search for) and the page number (looping from 1 to 100). For example, the following link: https://github.com/search?p=4&q=python&type=Repositories show the javascript repositories on page four and thus would be written as:

```python
'https://github.com/search?p=' + str(current_page) +'&q=' + coding_language + '&type=Repositories'
```

The number of stars along with the date and language were then written to a csv file.

https://github.com/search?p=2&q=javascript&type=Repositories

### 7. Cleaning the data and analysis

These steps were carried out in a Google CoLab notebook with accompanying annotations.

### 8. Summary of results for GitHub Scrapping

Results of scrapping GitHub were not ideal, but were substantially better than those retrieved from the GitHub API. The initial size of the dataset was 8454 entries. After cleaning to remove duplicate entries, and those outside the selected years of 2017-2021, the final numbers of entries in the dataset was 5887. This dataset was confirmed to contain sufficient entries for each language type in each year (unlike the results of the GitHub API).

The number of repositories per language per year was verified. However this is not a benchmark for popularity for popularity. The data was collected by random sampling. It is entirely possible that more repositories from one year were sampled over another as an artefact of the random nature. This does not indicate more people have been making more repositories of that kind over another. Looking at the number of repositories it would appear that a large number of C#, Kotlin, and Swift repositories have been created along.

To calculate the popularity the number of stars is used. This is essentially "bookmarking" the repository. In the GitHub API data it was observed that the stars and watchers tracked perfectly. This is be assumed to be the same for the repositories currently being analysed. It is not possible to use the simple total number of stars per language to determine popularity. Instead, for each year the breakdown of stars for each language type is compared. The reason for this is to create a better picture of how the language popularity changed each year. Repositories that are older have more time to be starred by users. A repository created in 2017 would have much more time to gain popularity and followers than one created at the end of 2021. A 2017 repository in C# may have thousands of stars, making it appear more popular that a 2021 JavaScript repository. However when compared within the total stars for 2017, that C# repository could constitute a miniscule fraction of the total stars for that year.

Instead, the total number of stars for each year is totalled. Then, the total amount of stars for each language is examined in comparison to this year total. This provides a gauge of how many people were interacting with the repositories in each language that year. The change in the yearly interactions with each language's repositories can then be examined over the years. Now the results are different than when just the number of repositories per year was examined. JavaScript emerges as the most popular language. Python also rates very highly, with a large rate of change from 2017 to 2021 (where it finishes second). Jave comes in third but with a much steadier rate than Python. Swift had an enormous amount of interested in 2017 (perhaps associated with the release of Swift 4.0) before dropping considerably to come in 4th. PHP, Kotlin, and TypeScript were all midrange contenders with PHP the more popular of the three. C, C++, and C# (which looked so popular in the repository per year count) finished off with very lower popularity ratings.
