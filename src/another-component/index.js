import React from 'react';
import { connect } from 'react-redux';
import { changeInputValue } from './another-component-actions'
import { changeSomeStr } from '../info/info-component-actions'

class AnotherComponent extends React.PureComponent {
   
    setSomeStr = () => this.props.changeSomeStr(this.props.inputValue);

    setInputValue = (event) => this.props.changeInputValue(event.target.value);

    render() {
        const { inputValue, someProp } = this.props;

        return (
            <div>
                {someProp}
                <input type="text" value={inputValue} onChange={this.setInputValue} />
                <button onClick={this.setSomeStr}>Поиск</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { anotherComponent } = state
    return {
        ...anotherComponent
    }
}

export default connect(
    mapStateToProps,
    {
        changeInputValue,
        changeSomeStr
    }
)(AnotherComponent)