// src/data/data.js
export const habits = new Array(15).fill(1).map((_, i) => ({
    id: Date.now() + i,
    title: `Habit ${i}`,
}));
