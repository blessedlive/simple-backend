import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Item, Prisma } from '@prisma/client';

@Injectable()
export class ItemService {
    constructor(private prisma: PrismaService) {}

    async item(itemWhereUniqueInput: Prisma.ItemWhereUniqueInput): Promise<Item | null> {
        return this.prisma.item.findUnique({
            where: itemWhereUniqueInput
        })
    }
}