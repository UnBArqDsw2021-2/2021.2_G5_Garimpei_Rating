import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
    constructor(private readonly ratingService: RatingService) {}

    @Get()
    findAll() {
        return this.ratingService.findAll();
    }

    @Get('made_by_user/:user_id')
    findRatingsMadeByUser(@Param('user_id') userId: number) {
        return this.ratingService.findRatingsMadeByUser(userId);
    }

    @Get('given_to_item/:item_id')
    findItemRatings(@Param('item_id') itemId: number) {
        return this.ratingService.findItemRatings(itemId);
    }

    @Post()
    createRating(@Body() createRatingDto: CreateRatingDto) {
        return this.ratingService.createRating(createRatingDto);
    }
}