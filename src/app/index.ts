import express, {Request, Response} from "express";
import morgan from "morgan";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as dotenv from "dotenv";
import Router from "./helpers/Router.js";
import connect from "./helpers/database.config.js";

//dotenv config
dotenv.config();

// define necessary constant
const nodeApplication = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


// Setting public directory
nodeApplication.use(express.static(path.join(__dirname, "../src/resources/public")));

// Config views and template engine
nodeApplication.set("view engine", "ejs");
nodeApplication.set("views", path.join(__dirname, "../src/resources/views"))

// Body parser
nodeApplication.use(express.urlencoded({extended: true}));
nodeApplication.use(express.json());

// Request logger
nodeApplication.use(morgan("common"));

// Routing
const router = new Router(nodeApplication);
router.route();

// Initialize server
nodeApplication.listen(PORT, () => {
    console.log("Server is live on port", PORT);
})
