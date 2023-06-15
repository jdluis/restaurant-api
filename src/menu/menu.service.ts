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
      category: 'principal',
      ingredients: ['Egg', 'pasta', 'meet'],
    },
    {
      id: 1,
      price: 17,
      name: 'Tofu',
      description: 'Tofu salteado',
      isActive: true,
      isSpecial: false,
      category: 'principal',
      ingredients: ['Egg', 'pasta', 'meet'],
    },
  ];

  create(createMenuDto: CreateMenuDto) {
    return this.menuModel.create(createMenuDto);
  }

  findAll() {
    return this.menuModel.find();
  }

  findAllActive() {
    const menuActive = this.menuModel.find({ isActive: true });
    return menuActive;
  }

  findAllSpecial() {
    const menuSpecial = this.menuModel.find({
      isActive: true,
      isSpecial: true,
    });
    return menuSpecial;
  }

  findOne(id: number) {
    const food = this.menuModel.find((food) => {
      food.id === id;
    });
    return food;
  }

  //testing
  update(id: number, updateMenuDto: UpdateMenuDto) {
    this.menu = this.menu.map((food) => {
      if (food.id === id) {
        return { ...food, ...updateMenuDto };
      }

      return food;
    });
    return this.findOne(id);
  }
  //testing
  remove(id: number) {
    const removedFood = this.menu.filter((food) => {
      food.id !== id;
    });
    return removedFood;
  }
}
