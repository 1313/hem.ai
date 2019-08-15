export interface ScheduleOptions {
  numberOfMeals: number;
}

export function generate(options: ScheduleOptions) {
  return new Array(options.numberOfMeals);
}
