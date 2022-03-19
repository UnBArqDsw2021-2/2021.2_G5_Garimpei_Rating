import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rating.dto';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingService {
    constructor(
        @InjectRepository(Rating)
        private ratingRepository: Repository<Rating>,
    ) {}

    async createRating(createRatingDto: CreateRatingDto) {
        const rating = await this.ratingRepository.findOne({
            userId: createRatingDto.userId,
            itemId: createRatingDto.itemId
        });
        if (rating) {
            throw new BadRequestException(`A rating with userId: ${createRatingDto.userId} and itemId: ${createRatingDto.itemId} already exists`);
        }
        return this.ratingRepository.save(createRatingDto);
    }

    async findAll() {
        return this.ratingRepository.find();
    }

    async findRatingsMadeByUser(userId: number) {
        const rating = await this.ratingRepository.find({ where: { userId: userId } });
        if (!rating) {
            throw new NotFoundException(`No ratings were found with userId: ${userId}`);
        }
        return rating;
    }

    async findItemRatings(itemId: number) {
        const rating = await this.ratingRepository.find({ where: { itemId: itemId } });
        if (!rating) {
            throw new NotFoundException(`No ratings were found with itemId: ${itemId}`);
        }
        return rating;
    }
}