//yarn
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Clock Classic", price: 100 },
        { id: 2, name: "Clock Pro", price: 200 }
    ]);
});
app.listen(5000, () => {
    console.log("Server działa na http://localhost:5000");
});
//# sourceMappingURL=index.js.map