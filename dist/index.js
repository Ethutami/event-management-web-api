import express, {} from "express";
const port = 8080;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).json('Welcome to Event Management Api');
});
// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(400).json({
        success: false,
        message: err.message,
    });
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=index.js.map