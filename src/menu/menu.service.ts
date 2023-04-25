import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  //For testing
  private menu = [
    {
      id: 0,
      price: 25,
      name: 'Pollo',
      description: 'Pollo salteado',
      isActive: false,
    },
    {
      id: 1,
      price: 17,
      name: 'Tofu',
      description: 'Tofu salteado',
      isActive: true,
    },
  ];

  create(createMenuDto: CreateMenuDto) {
    const newFood = {
      ...createMenuDto,
      id: Date.now(),
    };
    this.menu.push(newFood);

    return newFood;
  }

  findAll() {
    const menu = this.menu;
    return menu;
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
