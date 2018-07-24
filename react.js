


import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {

    getInitialState (){
        return {
            value: this.props.value,
            durable: this.props.durable,
            stepSize: this.props.stepSize
        }
    }
    componentDidMount (){
        var _this = this;
        var durable = this.state.durable;
        var stepSize = this.state.stepSize;
        var interval = setInterval(function(){
            var currentValue = this.state.value - stepSize;
            if(currentValue >=0){
                _this.setState({
                    value: currentValue
                });
            }
            else{
                clearInterval(interval);
            }

        },durable);
    }
    render(){
        return(
            <div>
                <span> Counter Value Decreasing from 100 to {this.state.value}</span>
            </div>
        )
    }

}
export default Counter;



