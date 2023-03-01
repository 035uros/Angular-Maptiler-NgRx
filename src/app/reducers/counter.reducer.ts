import { createReducer, on } from '@ngrx/store';
import { centerAllPins, setListOfPins, setMap } from '../reducers/counter.actions';

export interface MapState {
    map: any;
    listOfPins: any[];
  }
  
  const initialState: MapState = {
    map: null,
    listOfPins: []
  };
export const mapReducer = createReducer(
    initialState,
    on(setMap, (state, { map }) => ({ ...state, map })),
    on(setListOfPins, (state, { listOfPins }) => ({ ...state, listOfPins })),
    on(centerAllPins, (state) => {
        console.log(state.map);
      let lng = 0;
      let lat = 0;
      for (let i = 0; i < state.listOfPins.length; i++) {
        lng = lng + state.listOfPins[i].lng;
        lat = lat + state.listOfPins[i].lat;
      }
      if (state.map) {
        state.map.flyTo({
          center: [lng / state.listOfPins.length, lat / state.listOfPins.length],
          zoom: 13
        });
      }
      return state;
    })
  );