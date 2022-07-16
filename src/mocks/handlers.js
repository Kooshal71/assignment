import { rest } from "msw";

export const handlers = [
  rest.post("/api/login", (req, res, ctx) => {
    const mail = req.mail;
    const pass = req.pass;
    console.log(mail, pass);
    return res(ctx.status(200));
  }),
  rest.post("/api/register", (req, res, ctx) => {
    const mail = req.mail;
    const user = req.name;
    const pass = req.pass;
    console.log(mail, pass, user);
    return res(ctx.status(200));
  }),
  rest.post("/api/reset_password", (req, res, ctx) => {
    const pass = req.pass;
    console.log(pass);
    return res(ctx.status(200));
  }),
];
