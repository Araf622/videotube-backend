import { Router } from "express";
import { getUserChannelProfile, getWatchHistory, loginUSer, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../controllers/auth.middleware.js";

const router = Router()

/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */

router.route("/register").post(
    upload.fields([{
        name: "avatar",
        maxCount: 1,
    }, {
        name: "coverImage",
        maxCount: 1,
    }]),
    registerUser)

router.route("/login").post(loginUSer)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/channel/:username").get(verifyJWT, getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)



export default router