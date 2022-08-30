function setQueryString(supportedVersion) {
  const urlParams = new URLSearchParams(location.search);
  urlParams.set('support', supportedVersion);
  history.replaceState({}, '', '?' + urlParams);
}

function getInitialSliderState() {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get('support');
}
