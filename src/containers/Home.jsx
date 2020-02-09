import React, { useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { FaSearchMinus } from "react-icons/fa";

import { getItems, resetStore } from "redux/actions/getItem";
import MatchesList from "components/MatchesList";

const Home = props => {
    let {
    dispatch,
    items,
    itemsApiInProgress,
    itemsApiInError,
    filters,
    totalItemCount,
    source
  } = props;
  let { skip } = filters;
  // useEffect(() => {
  //   dispatch(getItems());
  //   // eslint-disable-next-line
  // }, []);
  useEffect(() => {
    dispatch(resetStore());
    // dispatch(getItems(source));
    // eslint-disable-next-line
  }, []);
  console.log('items', items)

  const loadMore = () => {
    !itemsApiInProgress && dispatch(getItems(source));
  };
  // if (itemsApiInProgress && items.length === 0) {
  //   items = [{}, {}, {}, {}, {}, {}];
  // }

  return (
    <div className="Home">
       <>
        <div className="center Home_body_container">
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            style={{ width: "100%" }}
            hasMore={!itemsApiInError && skip <= totalItemCount}
            loader={<div key={"loading"}></div>}
          >
            {/* {console.log('skip', skip, 'totalItemCount', totalItemCount, skip < totalItemCount)} */}
            {items.length ? (
              <MatchesList matches={items} />
              ) : (
                <div className="Home_noResult">
                  <FaSearchMinus size={60} />
                  <h4 className="title">No result found</h4>
                </div>
              )}
            </InfiniteScroll>
          </div>
        </>
      
    </div>
  );
};
const mapStateToProps = state => {
  return {
    source: state.itemsReducer.source,
    loading: state.loadingReducer.loadState,
    items: state.itemsReducer.items,
    itemsApiInProgress: state.itemsReducer.itemsApiInProgress,
    itemsApiInError: state.itemsReducer.itemsApiInError,
    totalItemCount: state.itemsReducer.totalItemCount,
    filters: state.itemsReducer.filters
  };
};
export default connect(mapStateToProps)(Home);
