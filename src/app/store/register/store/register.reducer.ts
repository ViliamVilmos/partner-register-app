import * as FromActions from './register.actions';
import { PartnerVerejnehoSektora } from 'src/app/models/PartnerVerejnehoSektora';

export function createFormReducer(state: PartnerVerejnehoSektora[], action: any) {
  switch (action.type) {
    case FromActions.ActionTypes.UPDATE_FORM: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
