import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import DogsList from "./DogsList";

function App(props) {
    return (
        <div className="App">
            <Route exact path="/dogs">
                <DogsList />
            </Route>
        </div>
    );
}

export default App;
