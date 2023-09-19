
export interface CryptoInfo {
    symbol: string,
    priceChange: number,
    priceChangePercent: number,
    weightedAvgPrice: number,
    lastPrice: number,
    lastQty: number,
    bidPrice: number,
    bidQty: number,
    askPrice: number,
    askQty: number,
    openPrice: number,
    highPrice: number,
    lowPrice: number,
    volume: number,
    quoteVolume: number,
    openTime: number,
    closeTime: number,
    firstId: number,
    lastId: number,
    count: number
};
export interface CryptoState {
    crypto: object[]
}
export type ActionType = {
    type: string,
    payload: object[]
}

