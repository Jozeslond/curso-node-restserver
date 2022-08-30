const { Router } = require("express");
const { getUser, postUser, putUser } = require("../controller/user");

const router = Router();

router.get("/", getUser );
router.post("/", postUser );
router.put("/:id", putUser );
router.put("/", (req, res) => {
  res.json({
    msg: "put API",
  });
});
router.delete("/", (req, res) => {
  res.json({
    msg: "delete API",
  });
});

module.exports = router;
