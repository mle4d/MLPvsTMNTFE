import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTMNT } from '../selectors/tmntSelector'; 
import { fetchTMNT } from '../actions/tmnt';
import TeenageMutantNinjaTurtles from '../components/TeenageMutantNinjaTurtles';

class tmntContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    tmnt: PropTypes.array.isRequired
  }
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { tmnt } = this.props;
    return <TeenageMutantNinjaTurtles tmnt={tmnt} />;
  }
}

const mapStateToProps = state => ({
  tmnt: getTMNT(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTMNT());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tmntContainer);
