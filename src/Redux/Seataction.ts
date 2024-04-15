export const btntype = 'BTN_TYPE';
export const acctype = 'ACC_TYPE';
export const Seataction = (rvalue: number,cvalue:number) => ({
    type: btntype,
    rpayload: rvalue,
    cpayload: cvalue,
});
export const Accountstatus = () => ({
    type: acctype,
});

