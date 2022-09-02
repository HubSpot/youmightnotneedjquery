const response = await fetch('/my/url');

if (!response.ok) {}

const body = await response.text();
