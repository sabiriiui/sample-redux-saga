
import produce from 'immer'
const initialState = {
    donors: [],
    loading: false
};

const reducer = (state = initialState, { type, value }) =>
    produce(state, draft => {
        switch (type) {
            case "ADD_DONOR_ASYNC":
                draft.donors.push(value);
                break;
            case "UPDATE_DONOR_ASYNC":
                const index = draft.donors.findIndex((item) => item.id === value.id)
                draft.donors.splice(index, 1, value)
                break;
            case "LOAD_DONORS_ASYNC":
                draft.donors = value;
                break;
            case "SET_LOADING":
                draft.loading = value;
                break;
            default:
                return draft
        }
    })

export default reducer;