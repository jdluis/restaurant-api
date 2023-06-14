export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  type: 'admin' | 'client';
}
