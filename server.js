var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    
article-one: {
    title: 'Article-one has started',
    heading:'Article-one',
    content:`<p>
                this is a web app. this is a web app. this is a web app. 
                </p>
            <p>
                        how come how come how come how come
                    </p>`
},
article-two: {title: 'Article-two has started',
    heading:'Article-two',
    content:`<p>
                this is a web app. this is a web app. this is a web app. 
                </p>
            `},
article-three: {title: 'Article-three has started',
    heading:'Article-three',
    content:`<p>
            how come how come how come how come
                    </p>`},
};
function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate =
`<html>
    <head>
        <title>
            ${title}
        </title>
    
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
                </div>
                <hr/>
                <h1>
                   ${heading}
                </h1>
                <div>
            ${content}
                </div>
            </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function(req, res){
   //articleName == article-one
   //articles[articleName] = {}  content object for article-one
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
    
});

app.get('/article-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
   
});

app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
   
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
