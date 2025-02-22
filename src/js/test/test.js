import sortHealth from '../app.js';

test('sort charectars', () => {
  const charactersList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'маг2', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = sortHealth(charactersList);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'маг2', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
