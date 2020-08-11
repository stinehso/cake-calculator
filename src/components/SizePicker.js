import React, { Component, Fragment } from 'react'
import SizeSlider from './SizeSlider'
import TextField from '@material-ui/core/TextField'

export default class SizePicker extends Component {
    constructor({ shape, setArea, num }) {
        super()
        this.state = {
            setArea: setArea,
            shape: shape,
            area: 0,
            dia: 0,
            len: 0,
            wid: 0
        }
    }

    onSliderChange = (value, type) => {
        let prefix
        (type === 'd')
            ? prefix = 'diameter'
            : (type === 'l') ? 
                prefix = 'length'
            : (type ==='w') ?
                prefix = 'width'
            : prefix = 'number'
        const inputField = document.getElementById(`${prefix}-input-${this.props.num}`)
        inputField.value = value
        this.onInputChange(value, type)
    }

    onInputChange = (value, type) => {
        (type === 'd') ?
            this.setState({ 
                dia: value,
                area: 3.14*(value/2)**2 
            }, () => {
                this.props.setArea(this.state.area)
            })
        : (type === 'l') ?
            this.setState({
                len: value, 
                area: value*this.state.wid
            }, () => {
                this.props.setArea(this.state.area)
            })
            : (type === 'w') ? 
                this.setState({ 
                    wid: value, 
                    area: value*this.state.len 
                }, () => {
                    this.props.setArea(this.state.area)
                })    
                :   this.setState({ 
                        area: value
                    }, () => {
                        this.props.setArea(this.state.area)
                    })   
    }

    render() {
        const shape = this.state.shape
        let outline, drawing, idText, labelText, typeIndicator
        if (shape === 'circle') {
            outline = 'outline'
            drawing = 'circle'
            idText = 'diameter'
            labelText = 'Diameter (cm)'
            typeIndicator = 'd'
        } else if (shape === 'square') {
            outline = 'outline'
            drawing = 'square'
            idText = 'length'
            labelText = 'Lengde (cm)'
            typeIndicator = 'l'
        } else {
            outline = ''
            drawing = 'heap'
            idText = 'number'
            labelText = 'Mengde/ antall'
            typeIndicator = 'n'
        }
        return (
            <Fragment>
                <div className={`shape ${outline} ${drawing}`}>
                    { shape === 'number'
                     ? <Fragment>
                            <div className='smallItem outline circle top'></div>
                            <div className='smallItem outline circle bottom1'></div>
                            <div className='smallItem outline circle bottom2'></div>
                        </Fragment>
                     : <Fragment></Fragment>
                    }
                </div>
                <TextField
                    id={`${idText}-input-${this.props.num}`}
                    label={labelText}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => this.onInputChange(e.target.value, typeIndicator)}
                />
                <SizeSlider valueChange={value => this.onSliderChange(value, typeIndicator)} />
                
                { (shape === 'square') 
                    ? <Fragment>
                        <TextField
                            id={`width-input-${this.props.num}`}
                            label="Bredde (cm)"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => this.onInputChange(e.target.value, 'w')}
                        />
                        <SizeSlider valueChange={value => this.onSliderChange(value, 'w')} />
                    </Fragment>
                    : <Fragment></Fragment>
                }
                
            </Fragment>

        )
    }
}