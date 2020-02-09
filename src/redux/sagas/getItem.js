import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { ActionTypes, SourceType } from "../constants/ActionTypes";
import APICaller from "utils/APICaller";
import get from "lodash/get";

export function* getItems(source) {
  const filters = yield select(state => state.itemsReducer.filters);
  let { search = "", limit = 50, skip = 0 } = filters;
  if (search.length) {
    search = search.trim().toLowerCase();
  }
  let urlOpts = "";
  switch(source) {
    case SourceType.NEWSAPI_SEARCH:
      urlOpts = `q=${search}`;
    case SourceType.NEWSAPI_HEADLINES:
      let pageIndex = 1;
      if (skip) {
        pageIndex = 1 + parseInt(skip / limit)
      }
      urlOpts = `${urlOpts}&page=${pageIndex}&pageSize=${limit}&language=en`;
      break;
    case SourceType.RECOMMENDATIONS:
      urlOpts = `limit=${limit}`
      if (skip) {
        urlOpts = `${urlOpts}&skip=${skip}`;
      }
      break;
    default:
      break
  }
  try {
    const response = yield call(APICaller, { method: "GET", source, reqOpts: urlOpts });
    yield put({
      type: ActionTypes.GET_ITEMS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ITEMS_FAILURE,
      payload: get(err, "message", "error")
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_ITEMS, (action) => getItems(action.payload))]);
}
