import React from "react";
import {Link} from "react-router-dom";

function Post({post}) {
    return(
        <>
            <section>
                <a href={post.url}><h1>{post.title}</h1></a>
                <Link to={`/subreddit/${post.subreddit}`}><h4>{post.subreddit_name_prefixed}</h4></Link>
                <p><span>Comments {post.num_comments}</span> - <span>Upvotes {post.ups}</span></p>
            </section>
        </>
    );
}

export default Post;