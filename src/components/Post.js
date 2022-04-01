import React from "react";
import {Link} from "react-router-dom";
import "./Post.css";

function Post({post}) {
    return(
        <>
            <section className="post-container">
                <a href={post.url}><h1 className="post-title">{post.title}</h1></a>
                <div className="post-card-footer">
                    <Link to={`/subreddit/${post.subreddit}`}><h4>{post.subreddit_name_prefixed}</h4></Link>
                    <p><span>Comments {post.num_comments}</span> - <span>Upvotes {post.ups}</span></p>
                </div>
            </section>
        </>
    );
}

export default Post;