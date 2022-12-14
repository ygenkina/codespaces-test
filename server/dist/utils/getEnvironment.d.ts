interface Environment {
    url: URL;
    managementApp: URL;
    clientId: string;
    clientSecret: string;
    oidcIssuer: URL;
    redirectUrl: URL;
}
export declare function getEnvironment(): Environment;
export {};
