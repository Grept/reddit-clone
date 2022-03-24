import React from "react";
import {useParams} from "react-router-dom";

function SubredditPage() {

    const {subredditId} = useParams();

    return(
        <>
            <p>subreddit page: {subredditId}</p>
        </>
    );
}

export default SubredditPage;