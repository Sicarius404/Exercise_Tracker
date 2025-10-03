export declare const auth: import("better-auth/*").Auth<{
    database: (options: import("better-auth/*").BetterAuthOptions) => import("better-auth/*").Adapter;
    trustedOrigins: string[];
    basePath: string;
    session: {
        cookie: {
            name: string;
            sameSite: string;
            secure: boolean;
            path: string;
            httpOnly: boolean;
        };
        expiresIn: number;
        updateAge: number;
    };
    rateLimit: {
        window: number;
        max: number;
    };
    security: {
        csrf: {
            enabled: boolean;
        };
    };
    emailAndPassword: {
        enabled: true;
    };
    jwt: {
        enabled: boolean;
    };
}>;
