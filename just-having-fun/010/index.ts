class EnergeticLevel {
  constructor(public level: string, public maxAtomicNumber: number) {}
}

function getEletronicDistribution(atomicNumber: number) {

  let reachedLastEnergeticLevel = false;
  var lastEnergeticLevel;

  getEnergeticLevels().forEach((energeticLevel, index) => {
    if (atomicNumber <= energeticLevel.maxAtomicNumber
      && !reachedLastEnergeticLevel) {
      console.log(energeticLevel.level, "-", )
      reachedLastEnergeticLevel = true;

      //Número que falta pra distribuição
      /* index === 0 ? atomicNumber : atomicNumber - getEnergeticLevels()[index - 1].maxAtomicNumber */
    }
  })
}

function getEnergeticLevels() {
  const ENERGETIC_LEVELS_TEMPLATE = [
    "K2",
    "L10",
    "M18",
    "N36",
    "O54",
    "P86",
    "Q118",
  ];
  const ENERGETIC_LEVELS = ENERGETIC_LEVELS_TEMPLATE.map(
    (level) => {
      var maxAtomicNumber = level.replace(level[0], "");
      return new EnergeticLevel(level[0], Number(maxAtomicNumber));
    }
  );

  return ENERGETIC_LEVELS;
}

getEletronicDistribution(26);

export {}
