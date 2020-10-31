import React from 'react'

class CoordinatesButton extends React.Component {
    
    clickHandler = (e) => {
        let mousePosition = [e.clientX ,e.clientY]
        // console.log(this.props)
        this.props.onReceiveCoordinates(mousePosition)
    }
    
    render() {
        // console.log(this.props(this.clickHandler)
        return (
            <div>
                <h1>Coord</h1>
                <button onClick={this.clickHandler}></button>
            </div>
        )
    }
}

export default CoordinatesButton