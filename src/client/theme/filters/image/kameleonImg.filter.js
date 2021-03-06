/**
 * @author v.lugovsky
 * created on 17.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function kameleonImg(layoutPaths) {
  'ngInject';

  return function(input) {
    return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
  };
}
