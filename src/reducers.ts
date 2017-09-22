import { combineReducers } from 'redux';

export interface Product {
  id: number,
  name: string
}

export interface State {
  products: Product[]
}

function productsReducer(state: any, action: any) {
  return state;
}


export const state = combineReducers({
  products: productsReducer
})