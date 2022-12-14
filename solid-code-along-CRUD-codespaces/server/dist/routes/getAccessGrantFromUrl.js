"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessGrantFromUrl = void 0;
const solid_client_authn_node_1 = require("@inrupt/solid-client-authn-node");
const solid_client_access_grants_1 = require("@inrupt/solid-client-access-grants");
const getEnvironment_1 = require("../utils/getEnvironment");
async function getAccessGrantFromUrl(req, res) {
    const env = (0, getEnvironment_1.getEnvironment)();
    const session = new solid_client_authn_node_1.Session();
    await session.login({
        clientId: env.clientId,
        clientSecret: env.clientSecret,
        oidcIssuer: env.oidcIssuer.href,
        // Note that using a Bearer token is mandatory for the UMA access token to be valid.
        tokenType: "Bearer",
    });
    /**
     * Retrieve an Access Grant issued to the application.
     */
    const accessGrant = await (0, solid_client_access_grants_1.getAccessGrant)(req.query.accessGrantUrl, {
        fetch: session.fetch,
    });
    res.send(accessGrant);
}
exports.getAccessGrantFromUrl = getAccessGrantFromUrl;
//# sourceMappingURL=getAccessGrantFromUrl.js.map