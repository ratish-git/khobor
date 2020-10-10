import { put, takeLatest, all } from "redux-saga/effects";
function* fetchFood() {
  const json = yield fetch(
    "http://newsapi.org/v2/top-headlines?country=in&apiKey=ce3c8c93755246e5a8cef5b3e16566ac"
  ).then((response) => response.json());
  yield put({ type: "FOOD_RECEIPE", json: json.articles });
}
function* actionWatcher() {
  yield takeLatest("GET_FOOD", fetchFood);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
