import { acctype } from "./Seataction";

export interface LoginState {
    status: boolean;
    name:String
}

const initialLoginState: LoginState = {
    status: false,
    name:'unknown'
};

const loginReducer = (state: LoginState = initialLoginState, action: any): LoginState => {
    switch (action.type) {
        case acctype:
            let ustatus=state.status;
            let upname=state.name;
            upname=action.uname;
            ustatus=!ustatus;
            return {
                ...state,
                status: ustatus,
                name:upname
            };
        default:
            return state;
    }
};

export default loginReducer;
