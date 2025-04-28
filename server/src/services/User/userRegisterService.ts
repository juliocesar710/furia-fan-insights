import { UserRepository } from '../../repositories/User/userRegisterRepository';
import bcrypt from 'bcrypt';

const userRepository = new UserRepository();

export class UserService {
  async registerUser({ email, password, name }: { email: string; password: string; name: string }) {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email já cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepository.createUser({
      email,
      password: hashedPassword,
      name,
    });

    return user;
  }
}
