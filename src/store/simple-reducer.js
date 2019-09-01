// This file is not being used, 
// I didn't delete just for comparison purposes
const initialState = {
    donors: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_DONOR_ASYNC":
            newState.donors = [...newState.donors, action.value];
            break;
        case "UPDATE_DONOR_ASYNC":
            const updatesItem = action.value
            const index = newState.donors.findIndex((item) => item.id === updatesItem.id)
            const updatedDonors = [...newState.donors]
            updatedDonors.splice(index, 1, updatesItem)
            newState.donors = updatedDonors;
            break;
        case "LOAD_DONORS_ASYNC":
            newState.donors = action.value;
            break;
        case "SET_LOADING":
            newState.loading = action.value;
            break;
        default:
            return newState
    }
    return newState;
};

export default reducer;