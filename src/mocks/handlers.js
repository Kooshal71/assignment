import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5000/api/login", (req, res, ctx) => {
    const email = req.email;
    const password = req.password;
    console.log(email, password);
    return res(ctx.status(200));
  }),
  rest.post("http://localhost:5000/api/register", (req, res, ctx) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    console.log(email, password, name);
    return res(ctx.status(200));
  }),
  rest.post("http://localhost:5000/api/reset_password", (req, res, ctx) => {
    const pass = req.pass;
    console.log(pass);
    return res(ctx.status(200));
  }),
];
