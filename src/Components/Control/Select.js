import React, {Component} from 'react'

class  Select extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(i){
        this.setState({value: i.target.value}, function(){
            this.props.onChange(this.state.value);
        });
    }

    render(){
        return(
            <div>
                <select className="form-control" onChange={this.onChange.bind(this)}>
                    <option select="true">yes</option>
                <   option select="false">no</option>
                </select>
            </div>

        )
    }
}
 export default Select;