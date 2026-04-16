import express from 'express';
const app = express();
const port = 3000;
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
const db = {
    users: [
        { name: "Jonh", position: "front-end", workExp: 5 },
        { name: "George", position: "back-end", workExp: 2 },
        { name: "William", position: "fullstack", workExp: 7 },
        { name: "Jessy", position: "team-leader", workExp: 6 }
    ]
};
app.get('/', (req, res) => {
    res.send({ message: 'hello' });
});
app.get('/users', (req, res) => {
    res.send(db.users);
    let foundUsers = db.users;
    if (req.query.name) {
        foundUsers = foundUsers.filter(u => u.name.indexOf(req.query.name) > -1);
    }
    res.json(foundUsers);
});
app.listen(port, () => {
    console.log(`Examply app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map