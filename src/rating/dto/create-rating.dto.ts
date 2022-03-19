import { IsIn, IsInt, Min } from "class-validator";

export class CreateRatingDto {
    @IsInt()
    @Min(0)
    userId: number;

    @IsInt()
    @Min(0)
    itemId: number;

    @IsIn([0, 1, 2, 3, 4, 5])
    score: number;
}