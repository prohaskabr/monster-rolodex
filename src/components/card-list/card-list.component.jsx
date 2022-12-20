import { Component } from "react"
import Card from '../card/card.component';
import './card-list.styles.css';


class CardList extends Component {

    render() {
        const { items } = this.props;
        console.log(items);
        return (
            <div className="card-list">
                {items.map((x) => (
                    <div className="card-container" key={x.id}>
                        <img alt={`item ${x.name}`} src={`https://robohash.org/${x.id}?set=set2&size=180x180`} />
                        <h2 >{x.name}</h2>
                        <p >{x.email}</p>
                    </div>
                ))}                
                <Card />
            </div>);
    }
}

export default CardList;