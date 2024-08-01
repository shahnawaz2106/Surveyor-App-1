// src/store/actions.ts

export const UPDATE_BREADCRUMB_DATA = 'UPDATE_BREADCRUMB_DATA';

export const updateBreadcrumbData = (data: any) => ({
  type: UPDATE_BREADCRUMB_DATA,
  payload: data,
});
