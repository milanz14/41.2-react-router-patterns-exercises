import "./App.css";
import { Route } from "react-router-dom";
import DogsList from "./DogsList";

function App() {
    return (
        <div className="App">
            <Route exact path="/dogs">
                <DogsList />
            </Route>
        </div>
    );
}

export default App;
