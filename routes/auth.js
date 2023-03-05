import express from 'express'
import { register, login, loginWithGoogle, connect } from '../controller/auth'
const router = express.Router()
router.post('/auth/register', register)
router.post('/auth/login', login)
router.post("/loginWithGoogle", loginWithGoogle)
router.get("/connect", connect)
module.exports = router