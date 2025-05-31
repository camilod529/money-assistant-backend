import { TransactionType } from '../../generated/prisma/index';
export const baseCategories = [
  // Income
  { name: 'Salary', type: TransactionType.INCOME },
  { name: 'Investment', type: TransactionType.INCOME },
  { name: 'Gift', type: TransactionType.INCOME },
  { name: 'Other Income', type: TransactionType.INCOME },

  // Expense
  { name: 'Groceries', type: TransactionType.EXPENSE },
  { name: 'Food', type: TransactionType.EXPENSE },
  { name: 'Rent', type: TransactionType.EXPENSE },
  { name: 'Utilities', type: TransactionType.EXPENSE },
  { name: 'Transportation', type: TransactionType.EXPENSE },
  { name: 'Entertainment', type: TransactionType.EXPENSE },
];
