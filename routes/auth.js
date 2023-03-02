import express from 'express'
import { register, login } from '../controller/auth'
const router = express.Router()
router.post('/auth/register', register)
router.post('/auth/login', login)
module.exports = router