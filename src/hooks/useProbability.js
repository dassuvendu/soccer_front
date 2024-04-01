import React from 'react'
import { useSelector } from 'react-redux';

export const useProbability = ({averageGoal}) => {
    const { h2h } = useSelector((state) => state.prediction);
    const probabilities = [];
//     const lambda = averageGoals;
// const maxGoals = 9;
// Function to calculate the probability using the Poisson Distribution formula
const calculateProbability = (lambda,k) => {
    const factorial = (n) => {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };
    const numerator = Math.exp(-lambda) * Math.pow(lambda, k);
    const denominator = factorial(k);
    return (numerator / denominator) * 100; // Convert to percentage
};

// for (let i = 0; i <= maxGoals; i++) {
//     probabilities.push({
//         goals: Math.round(i), // Round goals to nearest whole number
//         probability: calculateProbability(i), // Probability in percentage, already rounded
//     });
// }
// Calculate probabilities for different scorelines
const averageGoals = averageGoal;
console.log(averageGoals);
const scorelines = 
    h2h?.map((goal) => (
    { scoreline: `${goal?.goals?.home}-${goal?.goals?.away}`, 
    probability: calculateProbability(averageGoals,goal?.goals?.home) * calculateProbability(averageGoals,goal?.goals?.away)}
    ))

console.log("sc",scorelines);
// const scorelines = h2h.map((goal) => ({
//     scoreline: `${goal.goals.home}-${goal.goals.away}`,
//     probability: calculateProbability(averageGoals, 3) * calculateProbability(averageGoals, 0)
// }));

scorelines.forEach(({  probability }) => {
    probabilities.push({
        
        probability: `${probability.toFixed(0)}%`
    });
});
  return probabilities;
}
