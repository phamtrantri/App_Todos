/**
 * Created by phamtrantri on 8/29/2016.
 */
import {item_guid} from '../data/guid';
const items = (state = [], action) => {
  switch (action.type) {
      case 'ADD_ITEM':
          return [
              ...state,
              {
                  id: item_guid(),
                  name: action.item
              }
          ];
      case 'REMOVE_ITEM':
          return state.filter((item) => item.id !== action.id);
  }
  return state
};
export default items