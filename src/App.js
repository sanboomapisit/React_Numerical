import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
import Home from "./pages";
import SignIn from "./pages/Signin";
import Graphical from "./pages/RootsOfEquaations/Graphical";
import BisectionMethod from "./pages/RootsOfEquaations/BisectionMethod";
import FalsePosition from "./pages/RootsOfEquaations/FalsePosition";
import NewtonRapson from "./pages/RootsOfEquaations/NewtonRapson";
import OnePointIteration from "./pages/RootsOfEquaations/OnePointIteration";
import SecantMethod from "./pages/RootsOfEquaations/SecantMethod";
// 2
import Cramer_Rule from "./pages/LinearAlgibar/Cramer_Rule";
import GaussElimination from "./pages/LinearAlgibar/GaussElimination";
import GaussJordan from "./pages/LinearAlgibar/GaussJordan";
import LU_Decomposition from "./pages/LinearAlgibar/LU_Decomposition";
import JacobiIteration from "./pages/LinearAlgibar/JacobiIteration";
import GaussSeidelIteration from "./pages/LinearAlgibar/GaussSeidel_Iteration";
import ConjugateGradient from "./pages/LinearAlgibar/ConjugateGradient";

//3
import NewtonDivided from './pages/Interpolation/NewtonDivid'
import Lagrange from './pages/Interpolation/Lagrange'
import Spline from './pages/Interpolation/Spline'

//4
import Linear from './pages/Regression/Linear'
import Polynomial from './pages/Regression/Polynomial'
import Multiple from './pages/Regression/Multiple'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* RootsOfEquaations */}
        <Route path="/signin" component={SignIn} exact />
        <Route path="/GraphicalMethod" component={Graphical} exact />
        <Route path="/BisectionMethod" component={BisectionMethod} exact />
        <Route path="/FalsePosition" component={FalsePosition} exact />
        <Route path="/NewtonRapson" component={NewtonRapson} exact />
        <Route path="/OnePointIteration" component={OnePointIteration} exact />
        <Route path="/SecantMethod" component={SecantMethod} exact />
        {/* LinearAlgibar */}
        <Route path="/Cramer_Rule" component={Cramer_Rule} exact />
        <Route path="/GaussElimination" component={GaussElimination} exact />
        <Route path="/GaussJordan" component={GaussJordan} exact />
        <Route path="/LU_Decomposition" component={LU_Decomposition} exact />
        <Route path="/JacobiIteration" component={JacobiIteration} exact />
        <Route path="/GaussSeidel_Iteration" component={GaussSeidelIteration} exact />
        <Route path="/ConjugateGradient" component={ConjugateGradient} exact />
        {/* Interpolation */}
        <Route path="/Newton_Divided" component={NewtonDivided} exact />
        <Route path="/Lagrange_Polynomials" component={Lagrange} exact />
        <Route path="/Spline_Interpolaation" component={Spline} exact />

        {/* Least Squares Regression */}
        <Route path="/Linear_Regression" component={Linear} exact />
        <Route path="/Polynomial" component={Polynomial} exact />
        <Route path="/Multiple_Linear" component={Multiple} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
