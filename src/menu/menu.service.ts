import { Inject, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Model } from 'mongoose';
import { DATA_BASE } from './../../constants';
import { Menu } from './interfaces/menu.interface';

@Injectable()
export class MenuService {
  constructor(
    @Inject(DATA_BASE.MENU_MODEL) private readonly menuModel: Model<Menu>,
  ) {}

  //For testing
  private menu = [
    {
      id: 0,
      price: 25,
      name: 'Pollo',
      description: 'Pollo salteado',
      isActive: false,
      isSpecial: true,
    },
    {
      id: 1,
      price: 17,
      name: 'Tofu',
      description: 'Tofu salteado',
      isActive: true,
      isSpecial: false,
    },
  ];

  create(createMenuDto: CreateMenuDto) {
    return this.menuModel.create(createMenuDto);
  }

  findAll() {
    return this.menuModel.find();
  }

  findAllSpecial() {
    const menuActive = this.menu.find((food) => {
      food.isSpecial === true;
    });
    return menuActive;
  }

  findAllActive() {
    const menuActive = this.menu.find((food) => {
      food.isActive === true;
    });
    return menuActive;
  }

  findOne(id: number) {
    const food = this.menu.find((food) => {
      food.id === id;
    });
    return food;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    this.menu = this.menu.map((food) => {
      if (food.id === id) {
        return { ...food, ...updateMenuDto };
      }

      return food;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const removedFood = this.menu.filter((food) => {
      food.id !== id;
    });
    return removedFood;
  }
}
