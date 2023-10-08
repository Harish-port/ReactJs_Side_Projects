
interface Image {
    thumb: string,
    small: string,
    large: string
}

interface CurrencyTypes {
    aed: number,
    ars: number,
    aud: number,
    bch: number,
    bdt: number,
    bhd: number,
    bmd: number,
    bnb: number,
    brl: number,
    btc: number,
    cad: number,
    chf: number,
    clp: number,
    cny: number,
    czk: number,
    dkk: number,
    dot: number,
    eos: number,
    eth: number,
    eur: number,
    gbp: number,
    hkd: number,
    huf: number,
    idr: number,
    ils: number,
    inr: number,
    jpy: number,
    krw: number,
    kwd: number,
    lkr: number,
    ltc: number,
    mmk: number,
    mxn: number,
    myr: number,
    ngn: number,
    nok: number,
    nzd: number,
    php: number,
    pkr: number,
    pln: number,
    rub: number,
    sar: number,
    sek: number,
    sgd: number,
    thb: number,
    try: number,
    twd: number,
    uah: number,
    usd: number,
    vef: number,
    vnd: number,
    xag: number,
    xau: number,
    xdr: number,
    xlm: number,
    xrp: number,
    yfi: number,
    zar: number,
    its: number,
    ink: number,
    ats: number
}

export interface CryptoInfo {
    id: number,
    symbol: string,
    name: string,
    block_time_in_minutes: string,
    image: Image,
    market_data: {
        current_price: CurrencyTypes,
        roi: null,
        market_cap: CurrencyTypes,
        market_cap_rank: number,
        total_volume: CurrencyTypes,
        high_24h: CurrencyTypes,
        low_24h: CurrencyTypes,
        price_change_24h: number,
        price_change_percentage_24h: number,
        price_change_percentage_7d: number,
        price_change_percentage_14d: number,
        price_change_percentage_30d: number,
        price_change_percentage_60d: number,
        price_change_percentage_200d: number,
        price_change_percentage_1y: number,
        market_cap_change_24h: number,
        market_cap_change_percentage_24h: number,
        price_change_24h_in_currency: CurrencyTypes,
        price_change_percentage_1h_in_currency: CurrencyTypes,
        price_change_percentage_24h_in_currency: CurrencyTypes,
        price_change_percentage_7d_in_currency: CurrencyTypes,
        price_change_percentage_14d_in_currency: CurrencyTypes,
        price_change_percentage_30d_in_currency: CurrencyTypes,
        price_change_percentage_60d_in_currency: CurrencyTypes,
        price_change_percentage_200d_in_currency: CurrencyTypes,
        price_change_percentage_1y_in_currency: CurrencyTypes,
        market_cap_change_24h_in_currency: CurrencyTypes,
        market_cap_change_percentage_24h_in_currency: CurrencyTypes,
        total_supply: number,
        circulating_supply: number
    },
    last_updated: Date,
    localization?: CurrencyTypes
}

export interface CryptoState {
    crypto: object[]
}

export type ActionType = {
    type: string,
    payload: object[]
}

export interface globalState {
    allCryptoItems: {
        crypto: CryptoInfo[]
    }
}

