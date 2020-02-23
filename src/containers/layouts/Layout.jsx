import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import LoadingSpinner from "components/LoadingSpinner";
import API from "../../utils/API"
import { SourceType } from "../../redux/constants/ActionTypes";
import lscache from 'lscache'

class Layout extends React.Component {

  comonentDidMount() {
    const startup = 'startup'
    if (!lscache.get(startup)) {
      const response = API({ method: "GET", source: SourceType.RECOM , cached: false /* cached */, reqUrl : 'vanillalist', reqOpts: "limit=10" })
      lscache.set(startup, response.data, 30 /*LSCACHE_TIMEOUT mins*/)
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        {loading && (
          <div className="loading">
            <LoadingSpinner />
          </div>
        )}
        <Header />
        <div className="main-app">{this.props.children}</div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loadState,
    favourite_team: state.userReducer.favourite_team
  };
};
export default connect(mapStateToProps)(Layout);
