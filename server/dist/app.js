"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_flow_1 = require("dotenv-flow");
const postAccessRequestForm_1 = require("./routes/postAccessRequestForm");
const getResourceFromAccessGrantUrl_1 = require("./routes/getResourceFromAccessGrantUrl");
const getEnvironment_1 = require("./utils/getEnvironment");
const constants_1 = require("./static/constants");
const getAccessGrantFromUrl_1 = require("./routes/getAccessGrantFromUrl");
const getResourceFromRedirectUrl_1 = require("./routes/getResourceFromRedirectUrl");
const getPodRoot_1 = require("./routes/getPodRoot");
const cors_1 = __importDefault(require("cors"));
// Load env
(0, dotenv_flow_1.config)();
const env = (0, getEnvironment_1.getEnvironment)();
// Setup app
const app = (0, express_1.default)();
// Support parsing application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// Gets the Pod Root. Takes as query params:
// - `webID`
app.get("/getPodRoot", getPodRoot_1.getPodRoot);
// Posts the access request form. Takes as query params:
// - `owner`
// - `resource`
// - `redirectBackURL`
// Returns the URL to the Resource Owner's Access Management App.
app.post("/request", postAccessRequestForm_1.postAccessRequestForm);
// Gets the issued Access Grant from its URL. Takes as queyr param:
// - `accessGrantUrl`
app.get("/getAccessGrantFromURL", getAccessGrantFromUrl_1.getAccessGrantFromUrl);
// Get resource using an Access Grant URL
app.get(constants_1.RESOURCE_FETCHER_PATHNAME, getResourceFromAccessGrantUrl_1.getResourceFromAccessGrantUrl);
// Get resource from the redirect URL
app.get(constants_1.RESOURCE_REDIRECT_FETCHER_PATHNAME, getResourceFromRedirectUrl_1.getResourceFromRedirectUrl);
app.listen(env.url.port, async () => {
    /* eslint-disable-next-line no-console */
    console.log(`INFO::  Acme, Inc. Server-side code running on [${env.url.href}]...`);
});
//# sourceMappingURL=app.js.map