// Write your code here

import './index.css'

const DenominationItem = props => {
  const {money, withDraw} = props
  const {value} = money

  const del = () => {
    withDraw(value)
  }

  return (
    <li className="list">
      <button className="btn" type="button" onClick={del}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
