import React, { Component } from 'react'
import InputRow from './InputRow'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import './ShowResult.css'



export default class ShowResult extends Component {
    constructor({ multiplicator }) {
        super()
        this.state = {
            ingredients: [
                
            ],
            keyCounter: 0
        }
    }

    onInputChange = (value, id, type) => {
        let ingredients = [...this.state.ingredients]
        let item = {...ingredients[id]}
        type === 'quantity' ? item.amount = value
        : item.value = value
        ingredients[id] = item 
        this.setState({ ingredients: ingredients })
    }

    calculateHowMuch = (e) => {
        //this.addNewLine();
    }

    addNewLine = () => {
        console.log('new line');
        const newItem = {
            key: this.state.keyCounter,
            amount: '',
            value: '',
        }
        this.setState(prevState => ({
            ingredients: [...prevState.ingredients, newItem]
          }), () => {
            this.setState({ keyCounter: this.state.keyCounter+1 })
          })
        console.log(this.state.ingredients);
    }

    render() {
        const result = new Intl.NumberFormat('en-IN', { 
            maximumFractionDigits: 2
        }).format(this.props.multiplicator)

        return (
            <div>
                <h2>Multipliser oppskriften med {result}</h2>
            <Typography variant="subtitle2">
                Sett inn:
            </Typography>
            <div className='container'>
                {
                    this.state.ingredients.map((item, i) => {
                        return (
                            <InputRow 
                                id={item.key} 
                                amount={item.amount}
                                item={item.value} 
                                calculate={this.calculateHowMuch}
                                onInputChange={this.onInputChange}
                                multiplier={result} /> 
                        )
                    })
                }
            </div>
            <IconButton edge="start" color="inherit" aria-label="add-item"
                      classes='addButton'
                      onClick={e => this.addNewLine()}>
                <AddIcon />
            </IconButton>
            </div>
        )
    }
}
