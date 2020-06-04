import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './reducers/loginReducer';

const store = createStore(loginReducer,compose(applyMiddleware(thunk)))

export default store