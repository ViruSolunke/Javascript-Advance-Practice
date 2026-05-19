// 1. Function to calculate average score
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]; // Add each score to the sum variable to calculate the total sum of all scores in the array
  }
  return sum / scores.length;   // Divide the total sum by the number of scores to get the average score and return it
}

// 2. Function to return letter grade
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 3. Function to check if grade is passing
function hasPassingGrade(score) {
  return getGrade(score) !== "F"; // A student is considered to have a passing grade if their letter grade is not "F". This function calls the getGrade function with the student's score and checks if the returned letter grade is not equal to "F". If it is not "F", it returns true, indicating that the student has a passing grade; otherwise, it returns false, indicating that the student has failed the course.
}

// 4. Function to generate student message
function studentMsg(classScores, studentScore) { 
  let average = getAverage(classScores); 
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
