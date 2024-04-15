
export interface BtnInterface {
    rowidx: number,
    colidx: number,
    value: number,
    type: boolean,
}

class SeatingUtil {
  static seatorder(): BtnInterface[][] {
    const rows = 8;
    const cols = 30;

    const t: BtnInterface[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: BtnInterface[] = [];
      for (let j = 0; j < cols; j++) {
        let newobj: BtnInterface = {
          rowidx: i,
          colidx: j,
          value: j + 1,
          type: false,
        };
        if (j === 6 || j === 22) {
          newobj.value = 0; // Set value to 0 for specific columns
        }
        row.push(newobj);
      }
      t.push(row);
    }

    return t;
  }
}

export default SeatingUtil;  