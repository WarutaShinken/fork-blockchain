import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.FORK]: IS_MAINNET ? 'XFK' : 'TXFK',
};
