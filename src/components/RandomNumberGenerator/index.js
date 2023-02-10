import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  clickGenerate = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-count">Random Number</h1>
          <p className="description-count">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button
              className="button-count"
              type="button"
              onClick={this.clickGenerate}
            >
              Generate
            </button>
          </div>
          <p className="number-count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
