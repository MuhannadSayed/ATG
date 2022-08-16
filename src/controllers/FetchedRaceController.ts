import {HorseDetails, RaceHorses, SelectedRaceData} from '../redux/data/types';

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
let raceHorse: RaceHorses = {
  startNumber: 0,
  horseName: '',
  driver: '',
  horseDetails: {
    trainer: '',
    father: '',
  },
};
export const filterRaceData = (results: any): SelectedRaceData[] => {
  console.log('here what i have : ', results.races);

  let filteredDdata: SelectedRaceData[] = [race];

  /* var tempRacenr: number = 0;
  var tempRaceName: string = '';
  var tempRaceStartTime: string = '';
  var raceHorses: [RaceHorses] = [raceHorse]; */

  results.races.forEach(element => {
    console.log('element is : ', element);

    //tempRaceName = element.races.name;
    //tempRacenr = element.races.number;
    //tempRaceStartTime = element.races.startTime;
    race.raceHorses = filterRaceHorse(element.starts);
    race.betId = results.id;
    race.raceName = element.name;
    race.raceNumber = element.number;
    race.raceStartTime = element.startTime;
    // raceHorses = raceHorses;
    console.log('long is ', filteredDdata.length);

    filteredDdata.push(race);
  });

  console.log({race, filteredDdata});
  console.log("i'll return ", filteredDdata);

  return filteredDdata;
};

const filterRaceHorse = (e: any): [RaceHorses] => {
  //console.log('horses are : ', e);

  var horsesArr: [RaceHorses] = [raceHorse];

  var tempHorseName: string;
  var tempHorseDetails: HorseDetails = raceHorse.horseDetails;
  var tempHorseTrainer: string;
  var tempHorseFather: string;

  e.forEach(element => {
    //console.log('ele is : ', element.horse.pedigree.father.name);

    // tempHorseFather = element.horse.pedigree.father.name;
    //tempHorseTrainer =
    //element.horse.trainer.firstName + element.horse.trainer.lastName;

    tempHorseDetails.father = element.horse.pedigree.father.name;
    //console.log({tempHorseDetails});

    tempHorseDetails.trainer =
      element.horse.trainer.firstName + ' ' + element.horse.trainer.lastName;
    raceHorse.driver = element.driver.firstName + ' ' + element.driver.lastName;
    raceHorse.horseDetails = tempHorseDetails;
    raceHorse.horseName = element.horse.name;
    raceHorse.startNumber = element.number;
    //console.log({raceHorse});

    horsesArr.push(raceHorse);
  });
  //console.log("i'll return now ");

  return horsesArr;
};
