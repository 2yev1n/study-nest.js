import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';

@Module({
  imports: [],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService],
})
export class AppModule {}
