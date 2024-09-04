import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User Not Authenticated", 400));
  }
  // decoded is liay krtay hyn k agr kissi or ka token browser pr prra ho to yeh sign in krtay wqt ko token or secret key generate hoti hy us k sath token ko compare kr kauthenticate krry ga
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});
