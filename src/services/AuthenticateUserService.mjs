import jwt from 'jsonwebtoken';

import AppError from '../error/AppError.mjs';
import User from '../entities/User.mjs';


class AuthenticateUserService {
  async execute({ email, password }) {
    const usersRepository = new User;

    const user = await usersRepository.GetUserByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = password === user.password;

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const token = jwt.sign({email: user.email}, 'chave-secreta');

    return { token };
  }
}

export default AuthenticateUserService;
