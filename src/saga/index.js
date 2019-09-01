import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios'
const API_URL = process.env.NODE_ENV === 'production' ?
    `https://donors-json-server.herokuapp.com/donors` : 'http://localhost:3001/donors'
function* addDonorAsync(data) {
    //Call API Here
    const item = { ...data.value }
    yield put({ type: "SET_LOADING", value: true });
    const addedItem = yield axios.post(API_URL, item);
    yield put({ type: "ADD_DONOR_ASYNC", value: addedItem.data });
    yield put({ type: "SET_LOADING", value: false });

}

export function* watchAddDonor() {
    yield takeLatest("ADD_DONOR", addDonorAsync);
}

function* updateDonorAsync(data) {
    //Call API Here
    const item = { ...data.value }
    yield put({ type: "SET_LOADING", value: true });
    const addedItem = yield axios.put(`${API_URL}/${item.id}`, item);
    yield put({ type: "UPDATE_DONOR_ASYNC", value: addedItem.data });
    yield put({ type: "SET_LOADING", value: false });
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


