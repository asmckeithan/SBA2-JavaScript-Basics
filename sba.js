console.log(`SBA2 Ready to go `)

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.



// removing assignment that does not belong by splicing the assignment from the list 
//iterate through the objects , check the ids, if else or switch statements 
// if the due date is correct and take off points or 10% if assignment is submitted before the due date // getting the percentage // limitless id. 
 // create an array of objects for final results 
let student1 = [LearnerSubmissions];

console.log(student1)
let id = 125;

if (LearnerSubmissions === id) {
  console.log(id)
}else if (LearnerSubmissions.learner_id = id ) {
  console.log("Register")
}

let dueDate = "2023-02-27"
if (AssignmentGroup.assignments.due_at <= dueDate){
  console.log(AssignmentGroup.assignments)
}
try {
	LearnerSubmissions.learner_id > 132; 
		console.log(`Student is not registered`)
} catch (err) {
	console.log(`Error has occured `);
} finally {
	console.log("Please register student for upcoming class");
}


// } else if (grade >= 80) {
//   console.log("B")
// } else if (grade >= 70) {
//   console.log("C")
// } else if (grade >= 55) {
//   console.log("D")
// } else if (grade >= 0) {
//   console.log("F")
// } else {
//   console.log("Please enter valid grade.")



   const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
