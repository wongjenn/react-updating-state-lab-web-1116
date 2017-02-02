const React = require('react')

class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {timesClicked: 0}
    this.updateTimesClicked = this.updateTimesClicked.bind(this)
  }

  updateTimesClicked(){
    this.setState({timesClicked: this.state.timesClicked+=1})
  }

  render(){
    return(
      <div>
        <button onClick={this.updateTimesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }

}

module.exports = DigitalClicker
