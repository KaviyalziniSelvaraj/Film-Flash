import SeatingUtil, { BtnInterface } from "../controllers/Seatarrangement";
import  { btntype } from "./Seataction";

let t:BtnInterface[][] = SeatingUtil.seatorder();
export interface seatinterface
{
  row:string,
  seat:number,
};
export interface btnstateinterface
{
    T:BtnInterface[][],
    flag:boolean,
    count:number,
    seats:seatinterface[],
};

const btninitialstate={
    T:t,
    flag:true,
    count:0,
    seats:[],
};

const btntypeReducer = (state: btnstateinterface = btninitialstate, action: any) => {
        switch (action.type) {
          case btntype:
            let ucount=state.count;
            const useats=[...state.seats];
            const updatedT = state.T.map((row, rowIndex) => {
              if (rowIndex === action.rpayload) {
                return row.map((btn, colIndex) => {
                  if (colIndex === action.cpayload) {
                  if(!btn.type)
                  {
                  var ch=65+rowIndex;
                  useats.push({row:String.fromCharCode(ch),seat:btn.value});
                  ucount++;
                  console.log(useats);
                  }
                  else
                  {
                  var ch=65+rowIndex;
                  var idx=useats.findIndex((useats)=>{return(useats.row==String.fromCharCode(ch) && useats.seat==btn.value)})
                  useats.splice(idx,1);
                  console.log(useats);
                  ucount--;
                  }
                    return {
                      ...btn,
                      type: !btn.type
                    };
                  }
                  return btn;
                });
              }
              return row;
            });
            const updatedFlag = (ucount>0)?false:true;
            console.log(updatedFlag);
            
            return {
              ...state,
              T: updatedT,
              flag: updatedFlag,
              count:ucount,
              seats:useats,
            };
      
          default:
              return state;
        }
      };

export default btntypeReducer;