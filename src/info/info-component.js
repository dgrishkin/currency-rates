import React from 'react';
import { connect } from 'react-redux';
import { changeSomeStr } from './info-component-actions'

class Info extends React.PureComponent {
    state = {
        someVal: 0,
    }

    changeSomeVal = () => {
        this.setState({ someVal: this.state.someVal + 1 });
    }

    setSomeStr = (someStr) => this.setState({ someStr });

    resetState = () => {
        this.setState({
            someVal: 0,
            someStr: "Слово пастыря"
        });
    }

    componentDidMount() {
        this.setState({someStr: "Hello world!"})
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>Какое-то значение: {this.state.someVal}</p>
                <p>Какая-то строка: {this.props.someStr}</p>
                <button onClick={this.changeSomeVal}>Поменять какое-то значение</button>
                <button onClick={this.changeSomeStr}>Поменять какую-то строку</button>
                <button onClick={this.resetState}>Сброс</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { infoComponent } = state;
    return {
        ...infoComponent
    }
}

export default connect(
    mapStateToProps,
    {
        changeSomeStr
    }
)(Info)