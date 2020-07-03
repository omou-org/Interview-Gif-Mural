import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gifActions from '../../actions/gifActions';
import PropTypes from 'prop-types';
import React from 'react';

class gifList extends React.Component {
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
     this.props.gifActions.fetchGif();
   }

  renderData() {
    return <div>{this.props.gifs}</div>;
  }


  render() {
    return (
      <div className="app">
          {this.props.gifs.length > 0 ?
            this.renderData()
            :
            <div className="app">
              No Data
            </div>
          }
      </div>
    );
  }
}
gifList.propTypes = {
  gifActions: PropTypes.object,
  gifs: PropTypes.array
};
function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    gifActions: bindActionCreators(gifActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(gifList);