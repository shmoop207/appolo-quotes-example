"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const _ = require("lodash");
let QuotesManager = class QuotesManager {
    constructor() {
        this._quotes = {};
    }
    initialize() {
        this.quotesProvider.on('quoteReceived', this._onQuoteReceived, this);
    }
    _onQuoteReceived(newQuote) {
        this._quotes[newQuote.symbol] = newQuote;
        this.socketProvider.sendToRoom(newQuote.symbol, 'quoteReceived', newQuote);
    }
    getQuote(symbol) {
        return this.getQuotes([symbol])[symbol];
    }
    getQuotes(symbols) {
        let output = {};
        _.forEach(symbols, (symbol) => {
            let quote = this._quotes[symbol];
            quote && (output[symbol] = quote);
        });
        return output;
    }
    getAllQuotes() {
        return this._quotes;
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], QuotesManager.prototype, "quotesProvider", void 0);
tslib_1.__decorate([
    appolo_1.inject()
], QuotesManager.prototype, "socketProvider", void 0);
tslib_1.__decorate([
    appolo_1.initMethod()
], QuotesManager.prototype, "initialize", null);
QuotesManager = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], QuotesManager);
exports.QuotesManager = QuotesManager;
//# sourceMappingURL=quotesManager.js.map