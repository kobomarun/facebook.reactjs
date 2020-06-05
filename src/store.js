import { createStore, applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, addCategoryReducer, addBusiness } from './reducers/loginReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const allReducers = combineReducers({
  user:loginReducer,
  category:addCategoryReducer,
  business:addBusiness
})

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user", "category","business"] 
};
  const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer,compose(applyMiddleware(thunk)))
const persistor = persistStore(store);

export { persistor, store };