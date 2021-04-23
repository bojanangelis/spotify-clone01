export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //stavigo token posle na nill.
    //token: 'BQBK91_y723KhQ_Ko_TapFMxCNmxNhcHUQN7rZBAYpz2CPZ37ZHrKu41ucWhBPFbQk_zLGAWp2E8GAQFa2OTx-zV-dDAuNcDGRMUopzjgUYg55i0joL4wD6ZRqhMtBUUxi0UizEg64lyRcA7lHxVWJtDj_Vf1zCGbYs7M8CJEogJmYSN',
    token: null,
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
            ...state,
            token: action.token
        };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;