import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Switch>

        </>
    );
}

export default App;
