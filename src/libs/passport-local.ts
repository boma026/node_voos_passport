import { Strategy as LocalStrategy } from "passport";

export const localStrategy = new LocalStrategy({
    usernameField: "email",
    passwordField: "password"

}, async (email, password, done) => {
    console.log("email", email);
    console.log
});