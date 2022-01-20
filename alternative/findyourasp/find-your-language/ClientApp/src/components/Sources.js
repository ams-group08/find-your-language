import React, { Component } from 'react';
import Source from './Source';
import RedditIcon from "../Resources/RedditIcon.png"
import GithubIcon from "../Resources/GithIcon.png"
import StackoverflowIcon from "../Resources/StackoverflowIcon.png"
import GoogleTrendsIcon from "../Resources/GoogletrendIcon.png"




export class Sources extends Component {
    render() {
        return <div>
            <Source imagesource= {RedditIcon} sourcedescription="an image for reddit icon, orange colored" title="Reddit"></Source>
            <Source imagesource= {StackoverflowIcon} sourcedescription="stackoverflow icon" title="Stackoverflow"></Source>
            <Source imagesource={GithubIcon} sourcedescription="github icon" title="Github"></Source>
            <Source imagesource={GoogleTrendsIcon} sourcedescription="github icon" title="GoogleTrends"></Source>



        </div>;
    }
}

export default Sources;
