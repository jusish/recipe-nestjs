import { IsString } from 'class-validator';
import { IsOptional } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  ingredients: string;

  @IsNotEmpty()
  @IsString()
  instructions: string;
}
