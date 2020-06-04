import { createStore, applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, addCategoryReducer } from './reducers/loginReducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const allReducers = combineReducers({
  loginReducer,
  addCategoryReducer
})

const persistConfig = {
  key: "loginReducer",
  storage: storage,
  whitelist: ["loginReducer", "addCategoryReducer", ""] // which reducer want to store
};
  const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer,compose(applyMiddleware(thunk)))

export default store