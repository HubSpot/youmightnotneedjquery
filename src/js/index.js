function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

async function setStargazers() {
  let number = '10k+';
  try {
    const response = await fetch(
      'https://api.github.com/repos/hubspot/youmightnotneedjquery'
    );
    const data = await response.json();
    number = numberWithCommas(data.stargazers_count);
  } catch {}

  const stars = document.querySelector('.github-stars');
  stars.textContent = number;
}

function showFirst(...els) {
  let found = false;

  for (let i = 0, len = els.length; i < len; i++) {
    const el = els[i];
    if (el && !found) {
      found = true;
      el.style.display = 'block';
    } else if (el) el.style.display = 'none';
  }
}

function hide(...els) {
  for (const el of els) if (el) el.style.display = 'none';
}

function setMinVersion(version = 11) {
  version = parseInt(version);

  for (const section of document.querySelectorAll('.comparison')) {
    const blocks = section.querySelectorAll('.browser');

    const versions = Object.fromEntries(
      Array.from(blocks).map(
        (block) => [block.getAttribute('data-browser'), block],
        {}
      )
    );

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
        comp.textContent.toLowerCase().includes(term.toLowerCase())
      ) {
        empty = false;
        comp.classList.remove('hidden');
      } else comp.classList.add('hidden');
    }

    if (empty) section.classList.add('hidden');
    else {
      allEmpty = false;

      section.classList.remove('hidden');

      section.classList.toggle('odd', ++visibleIndex % 2);
    }
  }

  const comparisons = document.querySelector('.comparisons');
  comparisons.classList.toggle('empty', allEmpty);
}

document.addEventListener('DOMContentLoaded', () => {
  setStargazers();

  const slider = document.querySelector('.version-slider');
  function handleChange() {
    setMinVersion(slider.value);
  }
  handleChange();
  slider.addEventListener('change', handleChange);

  const search = document.querySelector('input[type="search"]');
  search.addEventListener('input', () => filter(search.value));
});
