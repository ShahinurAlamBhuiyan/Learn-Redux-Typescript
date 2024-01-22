import { connect } from "react-redux"
import { getCounter } from "../Redux/reducers/counterReducer"
import { decrease, increase } from "../Redux/actions/counterAction"

const Counter = ({ count, increase, decrease }) => {
    return (
        <div>
            <button onClick={() => { decrease(5) }}>-</button>
            <p>{count}</p>
            <button onClick={() => increase(10)}>+</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: getCounter(state),
})

const mapDispatchToProps = (dispatch) => ({
    increase: (count) => dispatch(increase(count)),
    decrease: (count) => dispatch(decrease(count))
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)