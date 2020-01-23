import faker from "faker";
import moment from "moment";
import { FETCH_EVENTS, FETCH_FAVS, FETCH_USER} from './actions/action'



const city = faker.address.city();
const country = faker.address.country();

const initialState = {
    items :[
      ],
    loading: false,
    spin: false,
    UserArray : [
    ]
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_EVENTS:
        console.log("fdfdf")
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          items: action.payload
        };

      case FETCH_FAVS:
        console.log("fdfdf")
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          tems: action.payload
        };
        case FETCH_USER:
            console.log("fdfdf")
                // Mark the state as "loading" so we can show a spinner or something
                // Also, reset any errors. We're starting fresh.
          return {
            ...state,
            UserArray: action.payload
          };
  
      default:
        // ALWAYS have a default case in a reducer
        return {
          ...state
        };
    }
  }