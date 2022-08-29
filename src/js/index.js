const VERSION_OPTIONS = [8, 9, 10, 11];
const DEFAULT_VERSION = 11;

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showFirst(...els) {
  var el, found, i, len, results;
  found = false;
  results = [];
  for (i = 0, len = els.length; i < len; i++) {
    el = els[i];
    if (el && !found) {
      found = true;
      results.push((el.style.display = 'block'));
    } else if (el) {
      results.push((el.style.display = 'none'));
    } else {
      results.push(void 0);
    }
  }
  return results;
}

function hide(...els) {
  var el, i, len;
  const results = [];
  for (i = 0, len = els.length; i < len; i++) {
    el = els[i];
    if (el) {
      results.push((el.style.display = 'none'));
    }
  }
  return results;
}

function setMinVersion(version = DEFAULT_VERSION) {
  version = parseInt(version);
  setQueryString('ie' + version.toString())

  const ref = document.querySelectorAll('.comparison');
  const results = [];
  for (let i = 0, len = ref.length; i < len; i++) {
    const section = ref[i];
    const blocks = section.querySelectorAll('.browser');
    const versions = {};
    for (let j = 0, len1 = blocks.length; j < len1; j++) {
      const block = blocks[j];
      versions[block.getAttribute('data-browser')] = block;
    }
    switch (version) {
      case 8:
        showFirst(versions['ie8']);
        results.push(hide(versions['ie9'], versions['ie10']));
        break;
      case 9:
        showFirst(versions['ie9'], versions['ie8']);
        results.push(hide(versions['ie10']));
        break;
      case 10:
        showFirst(versions['ie10'], versions['ie9'], versions['ie8']);
        results.push(hide(versions['ie11']));
        break;
      case 11:
        results.push(
          showFirst(
            versions['ie11'],
            versions['ie10'],
            versions['ie9'],
            versions['ie8']
          )
        );
        break;
      default:
        results.push(void 0);
    }
  }
  return results;
}

function filter(term) {
  let visibleIndex = 0;
  let allEmpty = true;
  const ref = document.querySelectorAll('section');
  for (let i = 0, len = ref.length; i < len; i++) {
    const section = ref[i];
    let empty = true;
    const ref1 = section.querySelectorAll('.comparison');
    for (let j = 0, len1 = ref1.length; j < len1; j++) {
      const comp = ref1[j];
      if (
        !term ||
        comp.textContent.toLowerCase().indexOf(term.toLowerCase()) !== -1
      ) {
        empty = false;
        comp.classList.remove('hidden');
      } else {
        comp.classList.add('hidden');
      }
    }
    if (empty) {
      section.classList.add('hidden');
    } else {
      allEmpty = false;
      section.classList.remove('hidden');
      if (++visibleIndex % 2) {
        section.classList.add('odd');
      } else {
        section.classList.remove('odd');
      }
    }
  }
  const comparisons = document.querySelector('.comparisons');
  if (allEmpty) {
    return comparisons.classList.add('empty');
  } else {
    return comparisons.classList.remove('empty');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.version-slider');

  const parsedSliderState = parseInt(getInitialSliderState()?.replace('ie', ''));
  if (VERSION_OPTIONS.includes(parsedSliderState)) {
    slider.value = parsedSliderState;
  } else {
    slider.value = DEFAULT_VERSION;
  }

  const stars = document.querySelector('.github-stars');
  fetch('https://api.github.com/repos/hubspot/youmightnotneedjquery')
    .then((r) => r.json())
    .then((data) => (stars.textContent = numberWithCommas(data.watchers_count)))
    .catch(() => (stars.textContent = '10k+'));

  function handleChange() {
    return setMinVersion(slider.value);
  }
  slider.addEventListener('change', handleChange);
  handleChange();
  const search = document.querySelector('input[type="search"]');
  return search.addEventListener('input', () => filter(search.value));
});
