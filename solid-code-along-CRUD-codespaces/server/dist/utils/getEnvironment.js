"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironment = void 0;
const constants_1 = require("../static/constants");
function getEnvironment() {
    const url = new URL(process.env.BASE_URL ?? "http://localhost");
    url.port = process.env.PORT ?? "8080";
    return {
        url,
        managementApp: new URL(process.env.ACCESS_MANAGEMENT_APP ??
            "https://podbrowser.inrupt.com/privacy/access/requests/"),
        clientId: process.env.CLIENT_ID ?? "",
        clientSecret: process.env.CLIENT_SECRET ?? "",
        oidcIssuer: new URL(process.env.OIDC_ISSUER ?? "https://login.inrupt.com"),
        redirectUrl: new URL(process.env.FRONTENT_REDIRECT ?? new URL(constants_1.RESOURCE_FETCHER_PATHNAME, url)),
    };
}
exports.getEnvironment = getEnvironment;
//# sourceMappingURL=getEnvironment.js.map