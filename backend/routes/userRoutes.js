
const express = require("express");
const { body, validationResult } = require("express-validator");
const {
    registerUser,
    loginUser,
    getProfile
} = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post(
    "/register",
    [
        body("name").trim().notEmpty(),
        body("email").isEmail().normalizeEmail(),
        body("password").isLength({ min: 6 })
    ],
    validate,
    registerUser
);

router.post(
    "/login",
    [body("email").isEmail(), body("password").notEmpty()],
    validate,
    loginUser
);

router.get("/profile", protect, getProfile);

router.get("/user-page", protect, authorize("user"), (req, res) => {
    res.json({ message: "User page accessed successfully" });
});

router.get("/admin", protect, authorize("admin"), (req, res) => {
    res.json({ message: "Admin page accessed successfully" });
});

module.exports = router;
