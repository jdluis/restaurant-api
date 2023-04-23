import { MinLength, IsEnum } from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  name: string;

  @IsEnum(['admin', 'client'], { message: 'Use Correct type!' })
  type: 'admin' | 'client';

  @MinLength(5)
  email: string;

  password: string;
}
