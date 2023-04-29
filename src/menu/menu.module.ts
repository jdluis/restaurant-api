import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { menuProviders } from './menu.provider';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [MenuController],
  providers: [MenuService, ...menuProviders],
})
export class MenuModule {}
