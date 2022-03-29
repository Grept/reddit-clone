import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "../../components/Post";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./HomePage.css";

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
            <section className="header-section">
                <Header />
            </section>
            <section className="post-section">
                <div className="post-section-container">
                    <header>
                        <h1>Hottest posts</h1>
                        <h5>on reddit right now</h5>
                    </header>
                    <ul className="post-list">
                        {postList.length > 0 &&
                        postList.map(({data: e}) => {
                            return <li key={e.created + e.title}><Post post={e} /></li>
                        })
                        }
                    </ul>
                </div>
            </section>
            <Footer />

        </>
    );
}

export default HomePage;