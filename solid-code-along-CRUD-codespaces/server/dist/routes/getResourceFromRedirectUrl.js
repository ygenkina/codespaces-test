"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceFromRedirectUrl = void 0;
const solid_client_authn_node_1 = require("@inrupt/solid-client-authn-node");
const solid_client_access_grants_1 = require("@inrupt/solid-client-access-grants");
const getEnvironment_1 = require("../utils/getEnvironment");
async function getResourceFromRedirectUrl(req, res) {
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
     * Retrieve an Access Grant issued to the application from the redirect URL.
     */
    const accessGrant = await (0, solid_client_access_grants_1.getAccessGrantFromRedirectUrl)(new URL(req.url, env.url.href).toString(), {
        fetch: session.fetch,
    });
    /**
     * Retrieve the URL of a resource to which access was granted.
     */
    const targetResource = accessGrant.credentialSubject.providedConsent.forPersonalData[0];
    /**
     * Retrieve a resource using an Access Grant.
     */
    const file = await (0, solid_client_access_grants_1.getFile)(targetResource, accessGrant, {
        fetch: session.fetch,
    });
    /**
     * Send back the resource.
     */
    // Note: this should be handled properly with file.type but browsers are not too good with ttl...
    res.type("text/plain");
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    file.arrayBuffer().then((buf) => {
        res.send(Buffer.from(buf));
    });
}
exports.getResourceFromRedirectUrl = getResourceFromRedirectUrl;
//# sourceMappingURL=getResourceFromRedirectUrl.js.map