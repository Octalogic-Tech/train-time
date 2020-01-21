import faker from "faker";
import moment from "moment";
import { FETCH_EVENTS, FETCH_FAVS} from './actions/action'



const city = faker.address.city();
const country = faker.address.country();

const initialState = {
    items :[
      ],
    loading: false,
    spin: false,
    UserArray = [
      {
        id:faker.random.uuid(),
        name:faker.name.findName(),
        city:city,
        country:country,
        favorite:true,
        image:faker.image.avatar(),
        cover:'https://source.unsplash.com/random',
        language:'EN',
      },
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
          loading: true
        };

      case FETCH_FAVS:
        console.log("fdfdf")
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          pin: true
        };
        case FETCH_FAVS:
            console.log("fdfdf")
                // Mark the state as "loading" so we can show a spinner or something
                // Also, reset any errors. We're starting fresh.
          return {
            ...state.UserArray,
            spin: true
          };
  
      default:
        // ALWAYS have a default case in a reducer
        return {
          ...state
        };
    }
  }