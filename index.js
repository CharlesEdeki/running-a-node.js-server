var http = require('http');

const PORT = 3000;

const friends = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@email.com"
    },
    {
        id: 2,
        name: "William Watson",
        email: "willwat@email.com"
    },
]

server = http.createServer(function (req, res) {
    const items = req.url.split('/');
    // what split will do if you have a url like /friends/1 => ['','friends','1']
    if (items[1] === 'friends') {
        // res.writeHead(200, {'Content-Type': 'application/json'}); // writeHead is used to write the header of the response
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) { 
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    
    } else if (items[1] === 'about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>About Page</h1>');
        res.write('<p>This is the about page</p>');
        res.write('<ul>');
        res.write('<li>I love games</li>');
        res.write('<li>Maths is a problem I think</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Page Not Found</h1>');
        res.write('<p>The page you are looking for does not exist</p>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
});