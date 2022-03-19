import { IsIn, IsInt, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateReportDto {
    @IsInt()
    @Min(0)
    userId: number;

    @IsInt()
    @Min(0)
    reportableId: number;

    @IsIn(['item', 'user', 'community'])
    reportableType: string;

    @IsIn([
        'nudity',
        'violence',
        'harassment',
        'false information',
        'spam',
        'hate speech',
        'terrorism',
        'something else',
    ])
    reason: string;

    @IsString()
    @MaxLength(500)
    @MinLength(20)
    text: string;
}