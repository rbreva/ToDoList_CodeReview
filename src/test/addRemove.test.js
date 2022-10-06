import { addTask } from '../js/addTask.js';

const taskslist = [];

describe('UnitTests', () => {
  test('Add function', () => {
    const task = { description: 'newtask.value', completed: false, index: '' };

    expect(addTask(task)).toBe(taskslist.length === 1);
  });
});
