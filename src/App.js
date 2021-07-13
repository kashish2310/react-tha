import React from "react";
import  {BrowserRouter as Router , Switch , Route}  from "react-router-dom";
import Day15 from "./components/Day15/Day15";
import Day16 from "./components/Day16/Day16";
import Day17 from "./components/Day17/Day17";
import Day18 from "./components/Day18/Day18";
import Day19 from "./components/Day19/Day19";


function App()
{
    return (

        <Router>
            <Switch>
                 <Route exact path="/day15">
                    <Day15/>
                </Route>
                <Route exact path="/day16">
                    <Day16/>
                </Route>
                <Route exact path="/day17">
                    <Day17/>
                </Route>
                <Route exact path="/day18">
                    <Day18/>
                </Route>
                <Route exact path="/day19">
                    <Day19/>
                    </Route>

            </Switch>
        </Router>
    );
}

export default App;
