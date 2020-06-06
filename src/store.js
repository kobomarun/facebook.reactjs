import { createStore, applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { addCategoryReducer, addBusiness,deleteBusiness, userReducer } from './reducers/loginReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const allReducers = combineReducers({
  category:addCategoryReducer,
  business:addBusiness,
  delete_business:deleteBusiness,
  user: userReducer
})

const persistConfig = {
  key: "business",
  storage: storage,
  whitelist: ["category","business","user"] 
};
  const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer,compose(applyMiddleware(thunk)))
const persistor = persistStore(store);

export { persistor, store };