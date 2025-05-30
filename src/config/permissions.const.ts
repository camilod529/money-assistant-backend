export const PERMISSIONS = {
  BOOK: {
    CREATE: 'book:create',
    DELETE: 'book:delete',
    UPDATE: 'book:update',
    INVITE_MEMBER: 'book:invite',
    REMOVE_MEMBER: 'book:remove_member',
    MANAGE_CATEGORIES: 'book:manage_categories',
    MANAGE_BUDGETS: 'book:manage_budgets',
  },
  ACCOUNT: {
    CREATE: 'account:create',
    DELETE: 'account:delete',
    UPDATE: 'account:update',
    VIEW: 'account:view',
  },
  TRANSACTION: {
    CREATE: 'transaction:create',
    DELETE: 'transaction:delete',
    UPDATE: 'transaction:update',
    VIEW: 'transaction:view',
  },
};

export type Permission = keyof typeof PERMISSIONS;
