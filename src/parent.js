import './node';

appendBody('running parent');

export function __unload(m) {
  appendBody('unloading parent');
}
