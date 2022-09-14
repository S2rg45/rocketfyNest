import { Injectable, Inject } from "@nestjs/common";
import { Db } from 'mongodb'
import { Model } from 'mongoose'
import { InjectModel } from "@nestjs/mongoose/dist";
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dtos/user.dtos'

@Injectable()
export class UsersService {
	constructor(
		@Inject('MONGO') private databaseMongo:Db,
		@InjectModel(User.name) private userModel: Model<User>,
	){}


	findByEmail(email: string) {
    return this.userModel.findById(email)
  }

	async create(data: CreateUserDto) {
    const newUser = new this.userModel(data);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    if (data.customerId) {
      const customer = this.userModel.findOne(data.customerId);
      newUser.customer = customer;
    }
    return this.userRepo.save(newUser);
  }

}