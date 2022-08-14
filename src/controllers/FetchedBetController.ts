import {FetchedBet} from '../redux/data/types';

export const filterData = (results: any): FetchedBet[] => {
  var filteredDdata: FetchedBet[] = [];
  let tracks: string[];
  results.forEach(element => {
    tracks = [];
    element.tracks.forEach(tr => {
      tracks.push(tr.name);
    });
    let f: FetchedBet = {
      betId: element.id,
      tracks: element.tracks[0].name,
      startTime: element.startTime,
    };
    filteredDdata.push(f);
  });

  return filteredDdata;
};
