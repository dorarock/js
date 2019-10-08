import React, { Component } from 'react'


export default class DisplayElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  render() {
    let newsBlock;
    if (this.state.display) {
      newsBlock = <div>
        <h3>Новости</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam possimus alias dignissimos eos quo facilis libero laborum ea omnis?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tempore?</p>
      </div>;
    }

    return (
      <div>
        <h2 className="link" onClick={() => {
          this.setState({ display: !this.state.display })
        }}>Скрыть/показать блок</h2>
        {newsBlock}
      </div>
    )
  }
}
