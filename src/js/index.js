function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showFirst(...els) {
  let found = false;

  for (let i = 0, len = els.length; i < len; i++) {
    const el = els[i];
    if (el && !found) {
      found = true;
      el.style.display = 'block';
    } else if (el) {
      el.style.display = 'none';
    }
  }
}

function hide(...els) {
  for (const el of els) if (el) el.style.display = 'none';
}

function setMinVersion(version = 11) {
  version = parseInt(version);

  for (const section of document.querySelectorAll('.comparison')) {
    const blocks = section.querySelectorAll('.browser');

    const versions = {};
    for (const block of blocks)
      versions[block.getAttribute('data-browser')] = block;

    switch (version) {
      case 8:
        showFirst(versions['ie8']);
        hide(versions['ie9'], versions['ie10']);
        break;
      case 9:
        showFirst(versions['ie9'], versions['ie8']);
        hide(versions['ie10']);
        break;
      case 10:
        showFirst(versions['ie10'], versions['ie9'], versions['ie8']);
        hide(versions['ie11']);
        break;
      case 11:
        showFirst(
          versions['ie11'],
          versions['ie10'],
          versions['ie9'],
          versions['ie8']
        );
        break;
    }
  }
}

function filter(term) {
  let visibleIndex = 0;

  let allEmpty = true;

  for (const section of document.querySelectorAll('section')) {
    let empty = true;

    for (const comp of section.querySelectorAll('.comparison')) {
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

      if (++visibleIndex % 2) section.classList.add('odd');
      else section.classList.remove('odd');
    }
  }

  const comparisons = document.querySelector('.comparisons');
  if (allEmpty) comparisons.classList.add('empty');
  else comparisons.classList.remove('empty');
}

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.version-slider');

  const stars = document.querySelector('.github-stars');
  fetch('https://api.github.com/repos/hubspot/youmightnotneedjquery')
    .then((r) => r.json())
    .then((data) => (stars.textContent = numberWithCommas(data.watchers_count)))
    .catch(() => (stars.textContent = '10k+'));

  function handleChange() {
    return setMinVersion(slider.value);
  }
  handleChange();

  slider.addEventListener('change', handleChange);

  const search = document.querySelector('input[type="search"]');

  search.addEventListener('input', () => filter(search.value));
});
