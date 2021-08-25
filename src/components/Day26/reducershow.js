const initialState={
    data: [],
};

const shows =(state=initialState,action)=>{
    switch(action.type){
        case "EMAIL":
            return {
                ...state,
                data: [
                  ...state.data,
                  {
                      message: action.message,
                  },
                ] ,         
            };
            case "NAME":
            return {
                ...state,
                data: [
                  ...state.data,
                  {
                      message: action.message,
                  },
                ] ,         
            };
            default:
                return state;
    }
};

export default shows;