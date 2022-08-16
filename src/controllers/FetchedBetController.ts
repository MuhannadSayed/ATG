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
      tracks: tracks,
      startTime: new Date(element.startTime),
      isExpanded: false,
    };
    filteredDdata.push(f);
  });

  return filteredDdata;
};
