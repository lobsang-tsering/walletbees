import React, { Component } from 'react';
class valueer extends Component {
    
    // state = {  
    //     value: this.props.counter.value
    // }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = () => {
    //     this.setState({value: this.state.value + 1});
    // }
    
    // conditional rendering better use && operator
    // this.state.tags.lenth ===0 && "Please create a new tag"

    render() {
        return ( 
            <div>
                <span  className={this.getBadgeClasses()}>{this.formatvalue()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm">
                        Increment
                </button>
                <button   
                    onClick={() => this.props.onDelete(this.props.counter.id)} // why ?
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
         );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatvalue() {
        const {value} = this.props.counter;  //Object destructuring 
        return value === 0 ? "Zero" : value;
    }
}

export default valueer;