import { MinLength } from 'class-validator';

export class UpdateUserDto {
  @MinLength(3)
  name: string;

  @MinLength(5)
  email: string;
}
