import './child';

appendBody('node');



export function __unload(m) {
  appendBody('unloading node');
}