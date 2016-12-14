
window.appendBody = function(str) {
  const div = document.createElement('div');
  div.textContent = str;
  document.body.appendChild(div);
}

appendBody('running child');

export function __unload(m) {
  appendBody('unloading child');
}





