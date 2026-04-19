import type {User} from "./types/AuthTypes.js";

let jon: User;

jon = {
    email: "jon@snow.com",
    roles: ["admin"]
};

let alice: User;

alice = {
    email: "alice@snow.com",
    roles: ["super_admin"],
    source: "facebook"
};

console.log(jon);
console.log(alice);

