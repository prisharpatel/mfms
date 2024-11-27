import { compose, withState } from 'recompose';

import PartnersScreen from './PartnerView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  PartnersScreen,
);
