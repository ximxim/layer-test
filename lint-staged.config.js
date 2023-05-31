module.exports = {
  '*.{ts,tsx}': () => ['yarn format:write', 'yarn validate'],
};
