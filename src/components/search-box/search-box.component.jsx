import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component{
    render(){
        const {defaultText, onChangeHandler} = this.props;        
        return <input className='search-box' type='search' placeholder={defaultText} onChange={onChangeHandler}  />
    }

}

export default SearchBox