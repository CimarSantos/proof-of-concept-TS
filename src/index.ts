import express from "express";
import cors from "cors";
import chalk from "chalk";

const server = express();

server.use(express.json());
server.use(cors());

const port = 5000;
server.listen(port, () => {
    console.log(chalk.blue(`Server running on port ${port}`));
})