import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, total: 0}

  onMango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {count} = this.state
    const {total} = this.state
    return (
      <div className="bg">
        <div className="container">
          <div className="contain">
            <h1 className="heading">
              Bob ate {count} mangoes {total} bananas
            </h1>
            <div className="containers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
            </div>
            <div className="containers">
              <button type="button" className="btn" onClick={this.onMango}>
                Eat Mango
              </button>
              <button type="button" className="btn" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
