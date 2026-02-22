import * as auth from "./types/AuthTypes";

let jon: User;

jon = {
    email: "jon@snow.com",
    roles: ["admin"]
};

let alice: auth.User;

alice = {
    email: "alice@snow.com",
    roles: ["super_admin"],
    source: "facebook"
};

