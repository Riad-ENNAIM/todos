import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, props) => ({
  active: props.filter === state.filter
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setFilter(props.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
