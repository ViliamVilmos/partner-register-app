import { Action } from '@ngrx/store';
import { PartnerVerejnehoSektora } from 'src/app/models/PartnerVerejnehoSektora';

export enum ActionTypes {
  UPDATE_FORM = '[Register Component] Update',
}

export class Update implements Action {
  readonly type = ActionTypes.UPDATE_FORM;

  constructor(public payload: PartnerVerejnehoSektora[]) {}
}
