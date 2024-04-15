import { Accountstatus, acctype } from "./Seataction";

export interface LoginState {
    status: boolean;
}

const initialLoginState: LoginState = {
    status: false,
};

const loginReducer = (state: LoginState = initialLoginState, action: any): LoginState => {
    switch (action.type) {
        case acctype:
            let ustatus=state.status;
            ustatus=!ustatus;
            return {
                ...state,
                status: ustatus,
            };
        default:
            return state;
    }
};

export default loginReducer;
