import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
  name: string;
  price: number;
  description: string;
  isActive: boolean;
  isSpecial: boolean;
}
