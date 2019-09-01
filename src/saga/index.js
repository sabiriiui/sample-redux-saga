import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios'
// const API_URL = 'http://localhost:3001/donors'
const API_URL = `https://donors-list.herokuapp.com:${process.env.PORT || 3001}/donors`
function* addDonorAsync(data) {
    //Call API Here
    const item = { ...data.value }
    const addedItem = yield axios.post(API_URL, item);
    yield put({ type: "ADD_DONOR_ASYNC", value: addedItem.data });
}

export function* watchAddDonor() {
    yield takeLatest("ADD_DONOR", addDonorAsync);
}

function* updateDonorAsync(data) {
    //Call API Here
    const item = { ...data.value }
    const addedItem = yield axios.put(`${API_URL}/${item.id}`, item);
    yield put({ type: "UPDATE_DONOR_ASYNC", value: addedItem.data });
}

export function* watchUpdateDonor() {
    yield takeLatest("UPDATE_DONOR", updateDonorAsync);
}

function* loadDonorAsync() {
    yield put({ type: "SET_LOADING", value: true });
    const res = yield axios(API_URL)
    yield put({ type: "LOAD_DONORS_ASYNC", value: res.data });
    yield put({ type: "SET_LOADING", value: false });

}

export function* watchLoadDonors() {
    yield takeLatest("LOAD_DONORS", loadDonorAsync);
}


