const express = require("express");
const path = require("path");
const json = require('json');

const app = express();
const port = 8080;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
let posts=[
    {
        id:uuidv4(),
        username:"Spider Man",
        StudentId:"21BCS10747",
        DepartMent:"Computer Science Engineering",
        Issue:"Spider says Batman cu me company kab ati ha",
    },
    {
        id:uuidv4(),
        username:"Batman",
        StudentId:"21BCS10694",
        DepartMent:"Computer Science Engineering",
        Issue:"Don't Worry 6100+ placement in last year",
    },
];
app.get("/posts",(req,res)=>{
   res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
 let {username , StudentId , DepartMent , Issue} = req.body;
  let id = uuidv4();
  posts.push({id,username , StudentId , DepartMent , Issue});
 res.redirect("/posts");
}); 
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
        res.render("show.ejs", { post });
});
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id);
      res.redirect("/posts");
});

app.listen(port,(req,res)=>{
    console.log(`Listing the app ${port}`);
});