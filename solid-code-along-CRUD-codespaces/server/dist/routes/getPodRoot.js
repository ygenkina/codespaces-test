"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPodRoot = void 0;
const solid_client_1 = require("@inrupt/solid-client");
async function getPodRoot(req, res) {
    /**
     * Get Pod URLs from public WebID profile.
     */
    const podURLs = await (0, solid_client_1.getPodUrlAll)(req.query.webID);
    console.log(`INFO:: PodURL ${podURLs[0]}`);
    res.send(podURLs[0]);
}
exports.getPodRoot = getPodRoot;
//# sourceMappingURL=getPodRoot.js.map