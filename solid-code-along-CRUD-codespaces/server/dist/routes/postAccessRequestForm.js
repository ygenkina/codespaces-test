"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAccessRequestForm = void 0;
const solid_client_access_grants_1 = require("@inrupt/solid-client-access-grants");
const solid_client_authn_node_1 = require("@inrupt/solid-client-authn-node");
const getEnvironment_1 = require("../utils/getEnvironment");
async function postAccessRequestForm(req, res) {
    /**
     * Session:
     */
    const env = (0, getEnvironment_1.getEnvironment)();
    const session = new solid_client_authn_node_1.Session();
    await session.login({
        clientId: env.clientId,
        clientSecret: env.clientSecret,
        oidcIssuer: env.oidcIssuer.href,
    });
    /**
     * Access Point discovery:
     */
    const accessEndpoint = await (0, solid_client_access_grants_1.getAccessApiEndpoint)(req.body.resource);
    /**
     * Create an Access Request:
     */
    const readAccess = { "read": true };
    const statedPurpose = "https://w3id.org/dpv#RequestedServiceProvision";
    const accessExpiration = new Date(Date.now() + 15 * 60000);
    const accessRequest = await (0, solid_client_access_grants_1.issueAccessRequest)({
        access: readAccess,
        purpose: [statedPurpose],
        resourceOwner: req.body.owner,
        resources: [req.body.resource],
        expirationDate: accessExpiration,
    }, {
        fetch: session.fetch,
        accessEndpoint,
    });
    /**
     * Redirect to Access Management application:
     */
    const redirectBackURL = req.body.redirectBackURL;
    await (0, solid_client_access_grants_1.redirectToAccessManagementUi)(accessRequest.id, redirectBackURL, {
        // Server-side calls to redirectToAccessManagementUi
        // must include a redirectCallback option to determine
        // how to handle the redirection.
        // In our case, instead of redirecting to the url,
        // our server-side app will return the url to the calling client-side app.
        redirectCallback: (url) => {
            res.json({ url });
        },
        fallbackAccessManagementUi: env.managementApp.href,
        fetch: session.fetch,
    });
}
exports.postAccessRequestForm = postAccessRequestForm;
//# sourceMappingURL=postAccessRequestForm.js.map