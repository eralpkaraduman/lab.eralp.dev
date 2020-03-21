var interval = setInterval(function() {
  // Waiting for brython
  if (!!window.brython) {
    // eslint-disable-next-line no-undef
    brython();
    // Brython initilized
    clearInterval(interval);
  }
}, 200);
