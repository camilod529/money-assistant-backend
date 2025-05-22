import { Book } from '../../../generated/prisma';

export class BookEntity implements Book {
  name: string;
  id: string;
  userId: string;
  description: string | null;
  createdAt: Date;

  constructor(partial: Partial<BookEntity>) {
    Object.assign(this, partial);
  }
}
