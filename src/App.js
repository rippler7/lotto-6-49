import React from 'react';

const numbers = [
    [34,19,46,1,39,8],
    [34,30,20,5,23,13],
    [5,42,26,21,45,31],
    [29,44,8,24,49,18],
    [13,20,6,37,40,39],
    [2,40,3,36,49,14],
    [17,4,18,20,32,15],
    [19,3,48,31,10,43],
    [20,49,43,46,44,8],
    [36,11,6,46,16,17],
    [23,2,5,40,26,33],
    [19,28,9,49,48,25],
    [19,10,8,24,20,13],
    [22,20,23,43,15,5],
    [40,8,49,46,42,30],
    [45,12,7,29,30,38],
    [11,43,37,38,28,45],
    [10,37,7,46,43,41],
    [29,44,23,17,19,35],
    [9,26,10,47,35,25],
    [20,39,7,40,13,41],
    [45,31,46,26,7,19],
    [47,44,38,37,11,13],
    [42,31,22,34,25,3],
    [32,42,1,4,10,2],
    [26,33,14,48,6,42],
    [29,35,24,20,2,43],
    [37,45,47,12,22,8],
    [24,39,41,29,22,20],
    [3,47,13,12,7,1],
    [34,4,17,28,11,30],
    [7,33,42,16,32,5]
];

const analyzeTrends = (sets) => {
  const frequencyMap = {};
  sets.forEach((set) => {
    set.forEach((number) => {
      if (frequencyMap[number]) {
        frequencyMap[number]++;
      } else {
        frequencyMap[number] = 1;
      }
    });
  });
  return frequencyMap;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateNewSets = (frequencyMap, numSets) => {
  const newSets = [];
  for (let i = 0; i < numSets; i++) {
    const newSet = [];
    const sortedNumbers = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);
    const shuffledNumbers = shuffleArray(sortedNumbers);
    for (let j = 0; j < 6; j++) {
      newSet.push(parseInt(shuffledNumbers[j]));
    }
    newSets.push(newSet);
  }
  return newSets;
};

const App = () => {
  const frequencyMap = analyzeTrends(numbers);
  const newSets = generateNewSets(frequencyMap, 6);

  return (
    <div>
      <h1>New Sets Based on Statistical Trend</h1>
      <ul>
        {newSets.map((set, index) => (
          <li key={index}>{set.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
