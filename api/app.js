const express = require('express');
const path = require('path');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Example API",
        description: "Example API Information",
        contact: {
          name: "Apisit Srinuanpan Developer"
        },
        servers: ["http://localhost:5000/"]
      }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//Routes

/**
 * @swagger
 * /api/example:
 *  get:
 *    tags : ["ALL Example"]
 *    description: Use to request all Example
 *    responses:
 *       '200':
 *         description: A successful response
 */

/**
 * @swagger
 * /api/example/{name}:
 *  get:
 *      tags : ["fill you method to get example data"]
 *      parameters:
 *      - name: name
 *        in: path
 *        required: true
 *      description: Use to request Example
 *      responses:
 *        '200':
 *          description: A successful response
 */ 



const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
app.use(cors())
app.use(logger);
const PORT = process.env.PORT || 5000 ;
// app.get('/',(req,res)=>{
//     res.json({"hi":"pppt"})
// })

app.use('/api/example',require('./route/api/Example'));
// set static folder 
app.use(express.static(path.join(__dirname,'service')))
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));