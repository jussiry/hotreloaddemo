import './hotReloader';

import './parent';

appendBody('running grand parent');


export function __unload(m) {
  appendBody('unloading grandparent');
}