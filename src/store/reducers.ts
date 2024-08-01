// src/store/reducers.ts

import { UPDATE_BREADCRUMB_DATA } from './actions';

const initialState = {
  breadcrumbData: [],
};

const breadcrumbReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_BREADCRUMB_DATA:
      return {
        ...state,
        breadcrumbData: [...state.breadcrumbData, action.payload],
      };
    default:
      return state;
  }
};

export default breadcrumbReducer;
