(function() {
  var hide, setMinVersion, showFirst,
    __slice = [].slice;

  showFirst = function() {
    var el, els, found, _i, _len, _results;
    els = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    found = false;
    _results = [];
    for (_i = 0, _len = els.length; _i < _len; _i++) {
      el = els[_i];
      if (el && !found) {
        found = true;
        _results.push(el.style.display = 'block');
      } else if (el) {
        _results.push(el.style.display = 'none');
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  hide = function() {
    var el, els, _i, _len, _results;
    els = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    _results = [];
    for (_i = 0, _len = els.length; _i < _len; _i++) {
      el = els[_i];
      if (el) {
        _results.push(el.style.display = 'none');
      }
    }
    return _results;
  };

  setMinVersion = function(version) {
    var block, blocks, section, versions, _i, _j, _len, _len1, _ref, _results;
    if (version == null) {
      version = 10;
    }
    version = parseInt(version);
    _ref = document.querySelectorAll('.comparison');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      section = _ref[_i];
      blocks = section.querySelectorAll('.browser');
      versions = {};
      for (_j = 0, _len1 = blocks.length; _j < _len1; _j++) {
        block = blocks[_j];
        versions[block.getAttribute('data-browser')] = block;
      }
      switch (version) {
        case 8:
          showFirst(versions['ie8']);
          _results.push(hide(versions['ie9'], versions['ie10']));
          break;
        case 9:
          showFirst(versions['ie9'], versions['ie8']);
          _results.push(hide(versions['ie10']));
          break;
        case 10:
          _results.push(showFirst(versions['ie10'], versions['ie9'], versions['ie8']));
          break;
        default:
          _results.push(void 0);
      }
    }
    return _results;
  };

  document.addEventListener('DOMContentLoaded', function() {
    var handleChange, slider;
    slider = document.querySelector('.version-slider');
    (handleChange = function() {
      return setMinVersion(slider.value);
    })();
    return slider.addEventListener('change', handleChange);
  });

}).call(this);
