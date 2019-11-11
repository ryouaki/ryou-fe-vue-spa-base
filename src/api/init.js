import * as utils from '@/common/utils';

export function doInit() {
  return new Promise((resolve) => {
    resolve(utils.getString('Ryouaki'));
  });
}
