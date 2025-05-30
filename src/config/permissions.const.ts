export const PERMISSIONS = {
  BOOK: {
    CREATE: 'book:create',
    DELETE: 'book:delete',
    INVITE_MEMBER: 'book:invite',
    MANAGE_ACCOUNTS: 'book:manage_accounts',
    MANAGE_BUDGETS: 'book:manage_budgets',
    MANAGE_CATEGORIES: 'book:manage_categories',
    REMOVE_MEMBER: 'book:remove_member',
    UPDATE: 'book:update',
    VIEW_ACCOUNTS: 'book:view_accounts',
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
