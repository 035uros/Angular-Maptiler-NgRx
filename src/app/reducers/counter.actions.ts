import { createAction, props } from '@ngrx/store';
import { MapState } from './counter.reducer';

export const setListOfPins = createAction(
  '[Map Component] Set List of Pins',
  props<{ listOfPins: any[] }>()
);

export const centerAllPins = createAction(
  '[Map Component] Center All Pins'
);

export const setMap = createAction(
  '[Map Component] Set Map',
  props<{ map: any }>()
);