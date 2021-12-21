import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
    getAllContacts() {
        return 'This is All Contacts';
    }
}
