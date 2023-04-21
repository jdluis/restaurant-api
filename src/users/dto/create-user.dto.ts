export class CreateUserDto {
  name: string;
  type: 'admin' | 'client';
  email: string;
}
