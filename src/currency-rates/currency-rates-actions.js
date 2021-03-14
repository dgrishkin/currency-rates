import axios from "axios";
import { LOAD_CURRENCY_RATES } from "./action-types"

export const loadCurrencyRates = () => (dispatch) => {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(response => {
            const rates = [];
            const valutes = response.data.Valute;
            for (let idx in valutes) {
                rates.push(valutes[idx])
            }
            dispatch({
                type: LOAD_CURRENCY_RATES,
                payload: rates
            });
        })
        .catch(error => console.log(error));
}