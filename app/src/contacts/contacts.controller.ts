import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
    @Get()
    findAll(): string {
        return 'This action returns all Contacts';
    }
}
