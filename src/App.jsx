import { useState } from 'react'
import './App.css';

const COURSES = [
  {
    id: 1,
    name: "Client Side Programming",
    credits: 6,
    grade: 100,
    attending: true,
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Databases",
    credits: 6,
    grade: 85,
    attending: true,
    difficulty: "Moderate"
  },
  {
    id: 3,
    name: "Operating Systems",
    credits: 6,
    grade: 90,
    attending: true,
    difficulty: "Moderate"
  },
  {
    id: 4,
    name: "Applied Probability and Statistics",
    credits: 6,
    grade: 75,
    attending: true,
    difficulty: "Hard"
  },
  {
    id: 5,
    name: "Written Communication",
    credits: 3,
    grade: 80,
    attending: true,
    difficulty: "Easy"
  },
  {
    id: 6,
    name: "English for Information Technology 2",
    credits: 3,
    grade: 85,
    attending: true,
    difficulty: "Easy"
  }
]

function App() {
  const [courses, setCourses] = useState(COURSES);
  return (
    <div>
      <h2>Elvir Avdiji - #132524</h2>
      <div>
        <h1>Courses</h1>
        <ul>
          {courses.map(course => (
            <div key={course.id} style={{ marginBlock: "3rem", border: "solid 1px black", width: "400px", padding: "1rem", borderRadius: ".5rem" }}>
              <p>Name: {course.name}</p>
              <p>Credits: {course.credits}</p>
              <p>Grade: {course.grade}</p>
              <p>Attending: {course.attending ? "Yes" : "No"}</p>
              <p>Difficulty: {course.difficulty}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
