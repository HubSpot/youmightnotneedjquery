function setQueryString(supportedVersion) {
  let supportedVersionStr = 'ie' + supportedVersion.toString();
  if (supportedVersion === 12) {
    supportedVersionStr = 'es6';
  }

  const urlParams = new URLSearchParams(location.search);
  urlParams.set('support', supportedVersionStr);
  history.replaceState({}, '', '?' + urlParams);
}

function getInitialSliderState() {
  const urlParams = new URLSearchParams(location.search);
  let supportVersionStr = urlParams.get('support');
  let supportVersion = 12;
  if (supportVersionStr === 'es6') {
    supportVersion = 12;
  } else if (supportVersionStr && supportVersionStr.indexOf('ie') === 0) {
    supportVersion = parseInt(supportVersionStr.substring(2));
  }
  return supportVersion;
}
