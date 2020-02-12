import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchActions from '../../actions/fetchActions';
import PropTypes from 'prop-types';
import React from 'react';

class stuffList extends React.Component {
    componentDidMount() {
       this.props.fetchActions.fetchGif();
    }

    renderData(item) {
        // console.log(item)
        return <div key={item.id}>{item.title}</div>;
    }

    render() {
        // let arrObj = this.props.giphy.data
        // let newArr = Object.keys(arrObj).map(e => {
        //     return console.log(e)
        // })

        // console.log(newArr)
        if(!this.props.giphy){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                    {
                     this.props.giphy.map((item, index) => {
                        return (
                            this.renderData(item)
                        )
                     })
                    }
                </div>
            )
        }
    }
}

// console.log(this.props.giphy)
// console.log(this.props.giphy.data)
stuffList.propTypes = {
    fetchActions: PropTypes.object,
    giphy: PropTypes.array
};

function mapStateToProps(state) {
    return {
        giphy: state.giphy.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
       fetchActions: bindActionCreators(fetchActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);