const {Router} = require("express");
const experienceRoute = require("./experience")
const salasRoute = require("./salas")

const router = Router()

router.use("/", experienceRoute)
router.use("/salas", salasRoute)

module.exports = router;