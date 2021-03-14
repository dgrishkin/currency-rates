import { combineReducers } from 'redux';
import { anotherComponent } from './another-component/another-component-reducer'
import { infoComponent } from './info/info-component-reducer'
import { currencyRates } from './currency-rates/currency-rates-reducer'

export const rootReducer = combineReducers({
    anotherComponent,
    infoComponent,
    currencyRates
});