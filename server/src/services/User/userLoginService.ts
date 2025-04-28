import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserLoginRepository } from '../../repositories/User/userLoginRepository';
import dotenv from 'dotenv';
dotenv.config();

const userLoginRepository = new UserLoginRepository();

export class UserLoginService {
  async loginUser(email: string, password: string) {
    const user = await userLoginRepository.findByEmail(email);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Senha inválida.');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '1h' }
    );

    return { token, user };
  }
}