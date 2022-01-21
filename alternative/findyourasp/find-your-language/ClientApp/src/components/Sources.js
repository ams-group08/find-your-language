import React, { Component } from 'react';
import Source from './Source';
import RedditIcon from "../Resources/RedditIcon.png"
import GithubIcon from "../Resources/GithIcon.png"
import StackoverflowIcon from "../Resources/StackoverflowIcon.png"
import GoogleTrendsIcon from "../Resources/GoogletrendIcon.png"

export class Sources extends Component {
    render() {
        const reddit = { name: "reddit", value: <Source width={this.props.width} imagesource={RedditIcon} sourcedescription="an image for reddit icon, orange colored" title="Reddit" linktopage="https://www.reddit.com/"></Source> }
        const stackoverflow = { name: "stackoverflow", value: <Source width={this.props.width} imagesource={StackoverflowIcon} sourcedescription="stackoverflow icon" title="Stackoverflow" linktopage="https://stackoverflow.com/"></Source> }
        const googletrends = { name: "googletrends", value: <Source width={this.props.width} imagesource={GoogleTrendsIcon} sourcedescription="github icon" title="GoogleTrends" linktopage="https://trends.google.com/trends/"></Source> }
        const github = { name: "github", value: <Source width={this.props.width} imagesource={GithubIcon} sourcedescription="github icon" title="Github" linktopage="https://github.com/"></Source> }
        const list = [reddit, stackoverflow, googletrends, github]
        const t = []
        list.map((item) => {
            if (this.props.exception !== item.name) {
                t.push(item.value);
            }
            return t;
        })
        return <div>
            {t}
        </div>;
    }
}
export default Sources;
