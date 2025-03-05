import express, { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User,AuthRequest } from "../config/types";
import userAuthenticate from "../middleware/authenticate";


const user = express.Router();

/** users */
user.get("/", (req, res) => {
     res.json({ message: "welcome to user" } );
});

/** Register user API  */
user.post("/register", async (req: Request , res: Response , next: NextFunction) => {
     const { name, email, password } = req.body;
     /* user info check ( validations ) */
     if (!name || !email || !password) {
          const err = createHttpError(400, " Need all fields");
          return next(err);
     }
     /** user check is there already exist  */
     try {
          const user = await userModel.findOne({ email: email });
           if (user != null) {
               const err = createHttpError(400, "user already exist with this mail id please login to account");
               return next(err);
          }

     } catch(error){
          return next(createHttpError(500, "Error while getting user "+error));
     }

     /** creating user in the db */
     let newUser: User;
     try {

          const hashpassword = await bcrypt.hash(password, 10);
          newUser = await userModel.create({
               name,
               email,
               password: hashpassword,
          });
     }catch(error){
          return next(createHttpError(500, "Error while creating user "+error));
     }

     try {
          const token = sign({ sub: newUser._id }, config.jwrSecret as string, { expiresIn: "7d" });
          res.status(201).json({  message: "welcome test",accessToken: token });
     }catch(error){
          return next(createHttpError(500, "Error while signing the token "+error));
     }
});

/** login user API  */
user.post("/login", async (req: Request, res: Response, next: NextFunction) => {
     
     const { email, password } = req.body;

     if (!email || !password) {
          const err = createHttpError(400, "please pass Email and password ");
          return next(err);
     }

     try {
          const user = await userModel.findOne({ email: email });
          if (user != null) {
          
               bcrypt.compare(password, user.password, function (err, result) {
                    if (err) throw err;
                    if (result === true) {
                         const token = sign({ sub: user._id }, config.jwrSecret as string, { expiresIn: "7d" });
                         res.json({ message: `welcome ${user.name}`, accessToken: token });
                    } else {
                         const err = createHttpError(400, "incorrect password please enter correct password ");
                         return next(err);
                    }
               });
               
          } else {
               const err = createHttpError(400, "user not exist please enter correct details ");
               return next(err);
          }

     } catch (error) {
          return next(createHttpError(500, "unable to validate the user " + error));
     }
});

/** update user API  */
user.post("/update", userAuthenticate, async (req: Request, res: Response, next: NextFunction) => {
     const _req = req as AuthRequest;
     const { name, email, password } = req.body;
     const userId = _req.userId;
     
     /* user info check ( validations ) */
     if (!name || !email || !password) {
          const err = createHttpError(400, " Need all fields");
          return next(err);
     }
     /** user check is there already exist  */
     try {
          const user = await userModel.findOne({ _id: userId });
          if (user != null) {
               let hashpassword = await bcrypt.hash(password, 10);

               bcrypt.compare(password, user.password, function (err, result) {
                    if (err) throw err;
                    if (result === true) {
                         hashpassword = user.password;
                    }
               });
               const updatedUser = await userModel.updateOne({ email }, { $set: { name, email, password: hashpassword } });
               if (updatedUser.matchedCount === 0) {
                    const err = createHttpError(400, "user not exist with this mail id 1");
                    return next(err);
               } else {
                    const token = sign({ sub: user._id }, config.jwrSecret as string, { expiresIn: "7d" });
                    res.json({ message:`user updated sucessfully `, accessToken: token });
               }
           } else {
               const err = createHttpError(400, "user not exist with this mail id 2");
               return next(err);
          }

     } catch(error){
          return next(createHttpError(500, "Error while getting user "+error));
     }

});

/** delete user API  */
user.post("/delete", async (req: Request , res: Response , next: NextFunction) => {
     const { email } = req.body;
     /* user info check ( validations ) */
     if ( !email ) {
          const err = createHttpError(400, " please provide email id ");
          return next(err);
     }
     try {
          const user = await userModel.findOne({ email: email });
          if (user != null) {
              
               const deleteUser = await userModel.deleteOne({ email });
               if (deleteUser.deletedCount === 0) {
                    const err = createHttpError(400, "user not exist with this mail id");
                    return next(err);
               } else {
                    res.json({ message:`user delted sucessfully ` });
               }
           } else {
               const err = createHttpError(400, "user not exist with this mail id");
               return next(err);
          }

     } catch(error){
          return next(createHttpError(500, "Error while getting user "+error));
     }

});

export default user;