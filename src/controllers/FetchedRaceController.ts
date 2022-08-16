import {RaceHorses, SelectedRaceData} from '../redux/data/types';

export const filterRaceData = (results: any): SelectedRaceData[] => {
  console.log({results});

  let filteredDdata: SelectedRaceData[] = [];
  results.races.forEach(element => {
    let race: SelectedRaceData = {
      betId: '',
      raceNumber: 0,
      raceName: '',
      raceStartTime: '',
      raceHorses: [
        {
          startNumber: 0,
          horseName: '',
          driver: '',
          horseDetails: {
            trainer: '',
            father: '',
          },
        },
      ],
    };
    race.raceHorses = filterRaceHorse(element.starts);
    race.betId = results.id;
    race.raceName = element.name;
    race.raceNumber = element.number;
    race.raceStartTime = element.startTime;
    filteredDdata.push(race);
  });

  return filteredDdata;
};

export const filterRaceHorse = (e: any): RaceHorses[] => {
  var horsesArr: RaceHorses[] = [];

  e.forEach(element => {
    let tempHorse: RaceHorses = {
      startNumber: 0,
      horseName: '',
      driver: '',
      horseDetails: {
        trainer: '',
        father: '',
      },
    };

    tempHorse.horseDetails.father = element.horse.pedigree.father.name;
    tempHorse.horseDetails.trainer =
      element.horse.trainer.firstName + ' ' + element.horse.trainer.lastName;
    tempHorse.driver = element.driver.firstName + ' ' + element.driver.lastName;
    tempHorse.horseName = element.horse.name;
    tempHorse.startNumber = element.number;

    horsesArr.push(tempHorse);
  });

  return horsesArr;
};
