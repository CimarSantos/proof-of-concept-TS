import express from "express";
import cors from "cors";
import chalk from "chalk";

import routes from "routes"; 

const server = express();

server.use(express.json());
server.use(cors());

server.use(routes);

const port = 5000;
server.listen(port, () => {
    console.log(chalk.blue(`Server running on port ${port}`));
})