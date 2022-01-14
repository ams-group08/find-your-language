## Getting data from GitHub

GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.

Professional and hobby developers use Github as a repository for their code. By looking at how the languages of interest are used in public projects it should be possible to provide a measure of how popular these languages are in real-world applications.

The [GitHub Rest API](https://docs.github.com/en/rest) was choosen to access this information. Fields of interest relate to how often the repositories are "watched", "starred" and "forked".

Stars: Starring makes it easy to find a repository or topic again later. Generally a developer will star repositories and topics to keep track of projects they find interesting.Many of GitHub's repository rankings depend on the number of stars a repository has.

Watch: When a developer chooses to watch a project, they will be notified whenever there are any updates. This is difference from the "star" system which does not provide notifications. Again, this is a good metric of how often other users are taking an interest or using a repo frequently enough that they require updates on any changes.

Fork: A fork is a copy of a repository. Forking a repository allows a developer to freely experiment with changes without affecting the original project. Again, this is an excellent indication of how frequently the code base and thus language is being actively used by developers.

The code to get the data from the GitHub API is visible in `dataScience/githubScript.py`. Below is a brief breakdown of how it worked.

### 1. Accessing the GitHub API

To use the GitHub API to its full potential it was necessary to generate a personal access tokens (PAT) via my GitHub account. For security reasons this token is not revealed. Locally I stored the token in an environment varials using the `os` library. The token was stored in the command line using:

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
