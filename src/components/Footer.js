import React, { Component } from 'react'
import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilters } from '../actions/visibilityFilter'

class Footer extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}>All</button>
        <button stype={{marginLeft: 20}} onClick={() => this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}>Completed</button>
        <button stype={{marginLeft: 20}} onClick={() => this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}>Active</button>
      </div>
    )
  }
}

export default connect()(Footer)
