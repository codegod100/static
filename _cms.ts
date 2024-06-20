import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

const cms = lumeCMS();

cms.storage(
    "src",
    new GitHub({
        client: new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") }),
        owner: "username",
        repo: "example",
    }),
);

// Rest of the configuration....

export default cms;