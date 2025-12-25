export function calorieCalculator(weight, height, targetWeight, age, gender) {
  if (gender == 'male') {
    return (
      10 * weight + 6.25 * height - 5 * age - 5 - 10 * (weight - targetWeight)
    );
  } else {
    return (
      10 * weight + 6.25 * height - 5 * age - 161 - 10 * (weight - targetWeight)
    );
  }
}
