import { generate } from "../schedule";

it("should expose a generate function", () => {
  expect(generate).toBeDefined();
  expect(generate).toBeInstanceOf(Function);
});

it(`should give me an array with 
    elements matching input days argumets`, () => {
  const schedule = generate({ numberOfMeals: 5 });

  expect(schedule.length).toBe(5);
});
