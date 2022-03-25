import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function SubredditPage() {

    const {subredditId} = useParams();
    const [subInfo, setSubInfo] = useState();

    useEffect(() => {

        async function getSubredditInfo(sub) {
            try {
                const {data: {data: info}} = await axios.get(`https://www.reddit.com/r/${sub}/about.json`)
                setSubInfo(info);
                console.log(info);
            } catch (e) {
                console.log(e);
            }
        }

        getSubredditInfo(subredditId);

    }, []);

    return(
        <>
            {subInfo &&
                <main>
                    <section>
                        <h3>Title</h3>
                        <p>{subredditId}</p>
                    </section>
                    <section>
                        <h3>Description</h3>
                        <p>{subInfo.public_description}</p>
                    </section>
                    <section>
                        <h3>Number of subscribers</h3>
                        <p>{subInfo.subscribers}</p>
                    </section>
                    <Link to="/">Take me back</Link>
                </main>
            }
        </>
    );
}

export default SubredditPage;