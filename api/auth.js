import authHandler from "decap-serverless-oauth";

export default authHandler({
    provider: "github",
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
});
