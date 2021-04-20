import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    getHello(): string {
        return "Hello world!"
    }

    @Get('user/list')
    async getUserList(): Promise<UserModel[]> {
        return this.userService.users({});
    }

    @Get('user/:id')
    async getUserById(@Param('id') id: string): Promise<UserModel> {
        return this.userService.user({ id: Number(id) })
    }

    @Post('user/:id/change-name')
    async changeUserNameById(@Param('id') id: string, @Body() postData: { name: string }): Promise<UserModel> {
        return this.userService.updateUser({ 
            data: { name: postData.name },
            where: { id: Number(id) },
        });
    }
}
