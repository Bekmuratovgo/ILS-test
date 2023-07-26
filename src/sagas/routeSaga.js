import { put, takeEvery } from 'redux-saga/effects';
import { selectRoute } from '../reducers/routeReducer';
import { fetchRouteData } from '../helpers/api';

function* getRouteData(action) {
  const routeId = action.payload.id;
  try {
    const response = yield fetchRouteData(`YOUR_API_ENDPOINT/${routeId}`);
    yield put(selectRoute(response.data));
  } catch (error) {
  }
}

function* routeSaga() {
  yield takeEvery('ROUTE_SELECTED', getRouteData);
}

export default routeSaga;
