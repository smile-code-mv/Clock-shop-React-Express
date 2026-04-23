//yarn
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}));
app.get("/", (req, res) => {
    res.send("<h1>Backend activated</h1>");
});
app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Clock Classic", price: 100 },
        { id: 2, name: "Clock Pro", price: 200 }
    ]);
});
app.listen(5000, () => {
    console.log("Server activated");
});
//# sourceMappingURL=index.js.map