import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(dto: UserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = new this.userModel({
      email: dto.email,
      password: hashedPassword,
    });

    return user.save();
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  // FIND BY ID (for auth / me)
  async findById(id: string) {
    return this.userModel.findById(id);
  }

  async findAll() {
    return this.userModel.find();
  }

  async comparePassword(plain: string, hash: string) {
    return bcrypt.compare(plain, hash);
  }
}
