const examples = [
    {
        name:"NewtonDivid",
        AExlem:[0,20000,40000,60000,80000],
        BExlem:[9.81,9.7487,9.6879,9.6879,9.5682],
        Xfindset:42000,
        size:5

    },
    {   
        name:"Lagrange",
        AExlem:[0,20000,40000,60000,80000],
        BExlem:[9.81,9.7487,9.6879,9.6879,9.5682],
        Xfindset:42000,
        size:5
    },
    {
        name:"spline",
        AExlem:[2,4,6,8,10],
        BExlem:[9.5,8.0,10.5,39.5,72.0],
        Xfindset:5,
        size:5
    },
    {
        name:"LinearRegression",
        Exlem:[[10, 5], [15, 9], [20, 15], [30, 18], [40, 22], 
        [50, 30], [60, 35], [70, 38], [80, 43]],
        Xfindset:65,
        size:9
    },
    {
        name:"MultiplelinearRegression",
        Exlem:[[1,0,1,4], [0,1,3,-5], [2,4,1,-6],[3,2,2,0],[4,1,5,-1],[2,3,3,-7],[1,6,4,-20]],
        Xfindset:1,
        size:3,
        sizeEq:7
    },
    {
        name:"PolynomialRegression",
        Exlem:[[10, 5], [15, 9], [20, 15], [30, 18], [40, 22], 
        [50, 30], [60, 35], [70, 38], [80, 43]],
        Xfindset:25,
        size:9,
        Mnumber:2
    },
    {
        name:"CramerRule",
        size:3,
        AExlem:[[-2,3,1],[3,4,-5],[1,-2,1]],
        BExlem:[9,0,-4]
    },
    {
        name:"GaussElimination",
        size:3,
        AExlem:[[-2,3,1],[3,4,-5],[1,-2,1]],
        BExlem:[9,0,-4]
    },
    {
        name:"GaussJordan",
        size:3,
        AExlem:[[-2,3,1],[3,4,-5],[1,-2,1]],
        BExlem:[9,0,-4] 
    },
    {
       name:"LuDecomposition",
       size:3,
       AExlem:[[-2,3,1],[3,4,-5],[1,-2,1]],
       BExlem:[9,0,-4] 
    },
    {
       name:"JacobiIteration",
       size:3,
       AExlem: [[4,-4,0],[-1,4,-2],[0,-2,4]],
       BExlem:[400,400,400],
       Xrandom:[100,100,100] 
    },
    {
       name:"GaussSeidel",
       size:3,
       AExlem: [[4,-4,0],[-1,4,-2],[0,-2,4]],
       BExlem:[400,400,400],
       Xrandom:[100,100,100] 
    },
    {
       name:"ConjugateGradient",
       size:4,
       AExlem: [[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]],
       BExlem:[12,17,14,7],
       Xrandom:[0,0,0,0]
    },
    {
       name:"Bisection",
       latex:"x^3-13",
       Xl:1.5,
       Xr:3.0
    },
    {
       name:"Graphical",
       latex:"2x+5",
       start:-5,
       finish:5
    },
    {
       name:"FalsePosition",
       latex:"1/x-43",
       Xl:0.02,
       Xr:0.03
    },
    {
        name:"OnePointIteration",
        latex:"1/4+x/2",
        X0:0 
    },
    {
        name:"NewtonRapson",
        latex:"x^2-7",
        X0:2.0 
    },
    {
        name:"SecantMethod",
        latex:"x^2-7",
        X0:2.0 ,
        X1:2.15
    }

]
module.exports = examples;