import express from 'express'
import { register, login, loginWithGoogle } from '../controller/auth'
const router = express.Router()
router.post('/auth/register', register)
router.post('/auth/login', login)
router.post("/loginWithGoogle", loginWithGoogle)
module.exports = router