// actions
export const INITIAL = "INITIAL";

// action creators
export function fetchInitial(data) {
    return {
        type: INITIAL,
        data
    }
}
