import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios'

function* addDonorAsync(data) {
    //Call API Here
    const item = { ...data.value }
    const addedItem = yield axios.post('http://localhost:3001/donors', item);
    yield put({ type: "ADD_DONOR_ASYNC", value: addedItem.data });
}

export function* watchAddDonor() {
    yield takeLatest("ADD_DONOR", addDonorAsync);
}

function* updateDonorAsync(data) {
    //Call API Here
    const item = { ...data.value }
    const addedItem = yield axios.put(`http://localhost:3001/donors/${item.id}`, item);
    yield put({ type: "UPDATE_DONOR_ASYNC", value: addedItem.data });
}

export function* watchUpdateDonor() {
    yield takeLatest("UPDATE_DONOR", updateDonorAsync);
}

function* loadDonorAsync() {
    const url = 'http://localhost:3001/donors'
    yield put({ type: "SET_LOADING", value: true });
    const res = yield axios(url)
    yield put({ type: "LOAD_DONORS_ASYNC", value: res.data });
    yield put({ type: "SET_LOADING", value: false });

}

export function* watchLoadDonors() {
    yield takeLatest("LOAD_DONORS", loadDonorAsync);
}


