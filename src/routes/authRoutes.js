import { Router } from 'express';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from '../controllers/authController.js';
import { celebrate } from 'celebrate';
import {
  loginUserSchema,
  reisterUserSchema,
} from '../validations/authValidations.js';

const router = Router();

router.post('/auth/register', celebrate(reisterUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;
