import jwt from 'jsonwebtoken';

import User from '../entities/User.mjs'
import AppError  from '../error/AppError.mjs';

class CreateUserService {
  async execute({
    userName,
    email,
    password,
  }){
    const usersRepository = new User;

    const checkUserExists = await usersRepository.findByEmail(email);

    if(!userName || !email || !password){
      throw new AppError('Invalid value for user, email or passord.')
    }

    if (checkUserExists) {
      throw new AppError('Email adress already used.');
    }

    const user = usersRepository.create({
      userName,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;
