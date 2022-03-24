import {Switch, Route} from "react-router-dom";
import './App.css';

import HomePage from "./pages/home/HomePage";
import SubredditPage from "./pages/subreddit/SubredditPage";



function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/subreddit/:subredditId">
                    <SubredditPage />
                </Route>
            </Switch>

        </>
    );
}

export default App;
