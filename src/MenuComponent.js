import React,{Component} from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets / images / uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'Indian Uthappam (Pancake) and Italian pizza'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: '' 
                },

                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: '' 
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: '' 
                }
            ]
            
        }
    }
}
export default Menu ;