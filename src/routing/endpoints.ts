export const MAIN_PAGE_URL = '/';
export const CREATE_TASK_PAGE_URL = '/tasks-add';
export const TEST_PAGE_URL = '/test';
export const DETAILS_PAGE_URL = (id: ':id' | number) => `/tasks/${id}`;
export const EDIT_TASK_PAGE_URL = (id: ':id' | number) => `/tasks-edit/${id}`;
