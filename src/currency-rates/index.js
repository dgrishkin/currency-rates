import React from 'react';
import { connect } from 'react-redux';
import { loadCurrencyRates } from './currency-rates-actions'

class CurrencyRates extends React.PureComponent {
    componentDidMount() {
        const { loadCurrencyRates } = this.props;
        loadCurrencyRates();
    }

    renderTableRow = (row, idx) => (
        <tr><td>{row.NumCode}</td><td>{row.CharCode}</td><td>{row.Name}</td><td>{row.Value}</td></tr>
    );

    render() {
        const { rates } = this.props

        return (
            <table border="1">
                <thead>
                    <tr>
                        <th width="50">Числовой код</th>
                        <th width="50">Символьный код</th>
                        <th>Наименование</th>
                        <th>Курс</th>
                    </tr>
                </thead>
                <tbody>
                    {rates.map(row => (<tr><td>{row.NumCode}</td><td>{row.CharCode}</td><td>{row.Name}</td><td>{row.Value}</td></tr>))}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    const { currencyRates } = state

    return {
        ...currencyRates
    }
}

export default connect(
    mapStateToProps,
    {
        loadCurrencyRates
    }
)(CurrencyRates)