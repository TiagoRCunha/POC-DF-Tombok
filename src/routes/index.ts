import express from "express";

const router = express.Router();

router.get("/", async (request, response) => {
    return response.send("Hello!");
});

export default router;