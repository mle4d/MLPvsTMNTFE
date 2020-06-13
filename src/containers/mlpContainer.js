import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMLP } from '../selectors/mlpSelector'; 
import { fetchMLP } from '../actions/mlp';
import MyLittlePony from '../components/MyLittlePony';

class mlpContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    mlp: PropTypes.array.isRequired
  }
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { mlp } = this.props;
    return <MyLittlePony mlp={mlp} />;
  }
}

const mapStateToProps = state => ({
  mlp: getMLP(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchMLP());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mlpContainer);
