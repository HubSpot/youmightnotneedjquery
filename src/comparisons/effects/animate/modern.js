await el.animate(
    [{ 'width': '0%' }, { 'width': '90%' }],
    { duration: 1000, easing: 'ease-in-out', fill: 'forwards' }
).finished;
await el.animate(
    [{ 'height': '24px' }, { 'height': '400px' }],
    { duration: 1000, easing: 'ease-in-out', fill: 'forwards' }
).finished;
