import React from 'react'

class DelayedButton extends React.Component {

    ClickHandler = (e) => {
        e.persist()
        // console.log(e.target)
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Delay</h1>
                <button onClick={this.ClickHandler}></button>
            </div>
        )
    }
}

export default DelayedButton