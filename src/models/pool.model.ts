import {PoolInvestment} from './pool-investment';

export class Pool {

  private namePool: string;
  private poolInvestments: PoolInvestment[];


  constructor(namePool: string, poolInvestments: PoolInvestment[]) {
    this.namePool = namePool;
    this.poolInvestments = poolInvestments;
  }


}
