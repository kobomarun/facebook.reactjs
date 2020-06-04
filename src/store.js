import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './reducers/loginReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, loginReducer)

const store = createStore(persistedReducer,compose(applyMiddleware(thunk)))

export default store