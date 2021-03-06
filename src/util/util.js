"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    static toFixed(number, precision) {
        number = parseFloat(number.toPrecision(12));
        if (precision) {
            number = parseFloat(number.toFixed(precision));
        }
        return number;
    }
}
exports.Util = Util;
//# sourceMappingURL=util.js.map