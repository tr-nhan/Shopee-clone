import express from "express";
import morgan from "morgan";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as dotenv from "dotenv";
import PathRouter from "./helpers/PathRouter.js";


// define necessary constant
const nodeApplication = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

//import .env file
dotenv.config({path: path.join(__dirname, "../src/resources/.env")});

// Setting public directory
nodeApplication.use(express.static(path.join(__dirname, "../src/resources/public")));

// Config views and template engine
nodeApplication.set("view engine", "ejs");
nodeApplication.set("views", path.join(__dirname, "../src/resources/views"))

// Body parser
nodeApplication.use(express.urlencoded({extended: true}));
nodeApplication.use(express.json());

// Request logger
morgan.token("date", (req, res, next) => {
    return (new Date()).toLocaleString();
});
nodeApplication.use(morgan(':remote-addr - :remote-user [:date[clf]] ' +
    '":method :url HTTP/:http-version" :status :res[content-length]'));

// Routing
const router = new PathRouter(nodeApplication);
router.route();

// Initialize server
nodeApplication.listen(PORT, () => {
    console.log("Node application starts on port", PORT);
});
