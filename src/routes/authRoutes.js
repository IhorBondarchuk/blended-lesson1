import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';
import { celebrate } from 'celebrate';
import {
  loginUserSchema,
  reisterUserSchema,
} from '../validations/authValidations.js';

const router = Router();

router.post('/auth/register', celebrate(reisterUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);

export default router;
