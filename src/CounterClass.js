import React from 'react'
class CounterClass extends React.Component{
    state={
        count:0
    }
    increamentCounter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decreamentCounter=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <>
                <button 
                onClick={this.increamentCounter}>+
                </button>
                <p>{this.state.count}</p>
                <button onClick={this.decreamentCounter}>-</button>
            </>
        )
    }
}
export default CounterClass
