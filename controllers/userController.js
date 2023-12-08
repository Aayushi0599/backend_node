// import user from "../model/userModel.js";
// import bcrypt from "bcrypt";
// import Jwt from "jsonwebtoken";


// const getUser= async (req, res) => {
//   try {
//     const users = await user.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching users' });
//   }
// }

// const registerUser = async (req, res) => {
//   const { name, email, mobileNo, password } = req.body;
//   const checkEmail = await user.findOne({ email: email });
//   if (checkEmail) {
//     res.send({ msg: "Email aleardy Exist", status: "Failed" });
//   } else if (email && password && mobileNo && name) {
//     try {
//       let hashpassword = await bcrypt.hash(password, 10);
//       const data = await user.create({
//         name: name,
//         email: email,
//         mobileNo: mobileNo,
//         password: hashpassword,
//       });
//       console.log(data);
//       res.send({ msg: "Sucessfully Registetred", status: "ok", data });
//     } catch (error) {
//       res.send({ msg: "User is Not Registered" });
//     }
//   }
// };

//   const loginUser = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       if (email && password) {
//         const data = await user.findOne({ email: email });

//         if (data && (await bcrypt.compare(password, data.password))) {
//           const accessToken = Jwt.sign(
//             { _id: data._id },
//             process.env.Access_Token,
//             { expiresIn: "1d" }
//           );

//                 // Generate Refresh Token
//                 const refreshToken = Jwt.sign(
//                   { _id: data._id },
//                   process.env.refresh_token,
//                   { expiresIn: "2d" }
//                 );
        
//           const updateuser = await user.findByIdAndUpdate(data.id, {
//             accessToken: accessToken,
//             refreshToken: refreshToken,

//           });

//           res.send({
//             _id: data._id,
//             name: data.name,
//             email: data.email,
//             mobileNo: data.mobileNo,
//             accessToken: accessToken,
//             refreshToken: refreshToken,

//           });
//         } else {
//           res.send({ msg: "You are Not a registetred user", status: "failed" });
//         }
//       } else {
//         res.send({ msg: "email && password is required", status: "failed" });
//       }
//     } catch (error) {

//       res.send(error);

//     }
//   };

// const logOut = async (req, res) => {
//   try {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res
//         .status(400)
//         .json({ msg: "No access token provided", status: "failed" });
//     }
//     console.log({ accessToken: token });
//     const userRecord = await user.findOne({ accessToken: token });
//     console.log(userRecord);

//     if (!userRecord) {
//       return res.status(404).json({ msg: "User not found", status: "failed" });
//     }

//     await user.findOneAndUpdate({ accessToken: "" });

//     return res.status(200).json({ msg: "Logout successful", status: "ok" });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ msg: "Error occurred while logging out", status: "failed" });
//   }
// };

// const updateUserPassword = async (req, res) => {
//   try {
//     const { userId, currentPassword, newPassword } = req.body;

//     if (!userId || !currentPassword || !newPassword) {
//       return res.send({
//         msg: "userId, currentPassword, and newPassword are required",
//         status: "failed",
//       });
//     }

//     const userData = await user.findById(userId);

//     if (!userData) {
//       return res.send({
//         msg: "User not found",
//         status: "failed",
//       });
//     }

//     const passwordMatch = await bcrypt.compare(currentPassword, userData.password);

//     if (!passwordMatch) {
//       return res.send({
//         msg: "Current password is incorrect",
//         status: "failed",
//       });
//     }

//     const hashedNewPassword = await bcrypt.hash(newPassword, 10);

//     const updatedUserData = await user.findByIdAndUpdate(userId, {
//       password: hashedNewPassword,
//     });

//     res.send({
//       msg: "Password updated successfully",
//       status: "success",
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

// export { registerUser, loginUser, logOut ,updateUserPassword ,getUser};
