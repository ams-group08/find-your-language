import requests
import csv
import json
import os

myheaders = ['id','node_id','name', 'full_name', 'private', 'owner', 'html_url', 'description', 'fork', 
'url', 'keys_url', 'archive_url', 'assignees_url', 'blobs_url', 'branches_url', 'collaborators_url', 
'comments_url', 'commits_url', 'compare_url', 'contents_url', 'contributors_url', 'deployments_url', 
'downloads_url', 'assignees_url', 'branches_url', 'events_url', 'forks_url', 'git_commits_url', 
'git_refs_url', 'git_tags_url', 'git_url', 'issue_comment_url', 'issue_events_url', 'issues_url',
'keys_url', 'labels_url', 'languages_url', 'merges_url', 'milestones_url', 'notifications_url', 'pulls_url',
'releases_url', 'ssh_url', 'stargazers_url', 'statuses_url', 'subscribers_url', 'subscription_url', 'tags_url',
'teams_url', 'trees_url', 'clone_url', 'mirror_url', 'hooks_url', 'svn_url', 'homepage', 'language', 'forks', 
'forks_count', 'stargazers_count', 'watchers_count', 'watchers', 'size', 'default_branch', 'open_issues', 
'open_issues_count', 'allow_forking', 'is_template',  'license', 'topics', 'has_issues', 'has_projects', 
'has_wiki', 'has_pages', 'has_downloads', 'archived', 'disabled', 'visibility', 'pushed_at', 'created_at',
'updated_at', 'permissions', 'score', 'template_repository' ]

token = os.getenv('TOKEN')
headers = {'Authorization': f'token {token}'}
page = 0

while (page < 5000):
    
    query = 'q=' + requests.utils.quote('created:>=' + '2017-01-01')
    url = f"https://api.github.com/search/repositories?{query}&page={page}"

    response = requests.get(url, headers=headers)
    response_dict = json.loads(response.content)

    page = page + 1
    
    print(page)
    try:
        items = response_dict['items']
        with open('./gitHubAPIResults.csv', mode='a', newline='') as myfile:
            writer = csv.DictWriter(myfile, fieldnames=myheaders)
            writer.writeheader()
            writer.writerows(items)
    except:
        print('Did not work for some reason')
        break

print('Reached limit')
