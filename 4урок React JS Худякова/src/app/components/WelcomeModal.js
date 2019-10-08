import React from 'react';

export default class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        }
    }

    render() {
        let block;
        if (this.state.modal) {
            block =  <div>
            <h1>Приветсвую Вас!</h1>
            <button onClick = {() => {
                this.setState({modal: !this.state.modal });
                console.log("tap")
            }}>ЗАКРЫТЬ</button>
        </div>
        }
        return (
            <>
                {block}
            </>
            )
    }

}