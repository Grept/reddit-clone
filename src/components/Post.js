import React from "react";

function Post({post}) {
    return(
        <>
            <section>
                <h1>{post.title}</h1>
                <h4>{post.subreddit_name_prefixed}</h4>
                <p><span>{post.num_comments}</span> - <span>{post.ups}</span></p>
            </section>
        </>
    );
}

export default Post;