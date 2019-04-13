export class PoolInvestment {

  private _investment: string;
  private _investmentChosen: boolean;


  constructor(investment: string, investmentChosen: boolean) {
    this._investment = investment;
    this._investmentChosen = investmentChosen;
  }


  get investment(): string {
    return this._investment;
  }

  get investmentChosen(): boolean {
    return this._investmentChosen;
  }

  set investment(value: string) {
    this._investment = value;
  }

  set investmentChosen(value: boolean) {
    this._investmentChosen = value;
  }
}
