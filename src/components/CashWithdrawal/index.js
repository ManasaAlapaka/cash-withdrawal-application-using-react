// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {total: 2000}

  onClicked = value => {
    const {total} = this.state
    this.setState(prevState => ({
      total: prevState.total - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {total} = this.state

    return (
      <div className="background-con">
        <div className="inner-con">
          <div className="details-div">
            <p className="logo">S</p>
            <p className="person-name">Sarah Williams</p>
          </div>
          <div className="balance-con">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="balance">{total}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="u-l money-con">
            <div className="money-con">
              {denominationsList.map(eachMoney => (
                <DenominationItem
                  money={eachMoney}
                  key={eachMoney.id}
                  withDraw={this.onClicked}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
