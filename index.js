const express=require("express") //it will load  express packages
// craete app object
const app=express()
//Route Creation
// Home route
app.get('/',function(request,response){

    response.send("<h1>Hello World</h1>")
})
// /api/main route
app.get('/api/main',function(request,response){

    response.send("<h1>Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.</h1>")
    
})
app.listen(8001)//port number
