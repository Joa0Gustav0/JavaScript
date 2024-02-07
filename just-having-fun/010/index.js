"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnergeticLevel = /** @class */ (function () {
    function EnergeticLevel(level, maxAtomicNumber) {
        this.level = level;
        this.maxAtomicNumber = maxAtomicNumber;
    }
    return EnergeticLevel;
}());
function getEletronicDistribution(atomicNumber) {
    var reachedLastEnergeticLevel = false;
    var lastEnergeticLevel;
    getEnergeticLevels().forEach(function (energeticLevel, index) {
        if (atomicNumber <= energeticLevel.maxAtomicNumber
            && !reachedLastEnergeticLevel) {
            console.log(energeticLevel.level, "-");
            reachedLastEnergeticLevel = true;
            //Número que falta pra distribuição
            /* index === 0 ? atomicNumber : atomicNumber - getEnergeticLevels()[index - 1].maxAtomicNumber */
        }
    });
}
function getEnergeticLevels() {
    var ENERGETIC_LEVELS_TEMPLATE = [
        "K2",
        "L10",
        "M18",
        "N36",
        "O54",
        "P86",
        "Q118",
    ];
    var ENERGETIC_LEVELS = ENERGETIC_LEVELS_TEMPLATE.map(function (level) {
        var maxAtomicNumber = level.replace(level[0], "");
        return new EnergeticLevel(level[0], Number(maxAtomicNumber));
    });
    return ENERGETIC_LEVELS;
}
getEletronicDistribution(26);
