import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "../../components/Post";

function HomePage() {

    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function getPopularPosts() {
            try {
                const {data: {data: {children: topPosts}}} = await axios.get("https://www.reddit.com/hot.json?limit=15");
                console.log(topPosts);
                setPostList(topPosts);
            } catch (e) {
                console.log(e);
            }
        }

        getPopularPosts();
    }, []);

    return (
        <>
            <h1>home page</h1>
            <ul>
                {postList.length > 0 &&
                postList.map(({data: e}) => {
                    return <li key={e.created + e.title}><Post post={e} /></li>
                })
                }
            </ul>

        </>
    );
}

export default HomePage;