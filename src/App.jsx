import { useMemo, useState } from 'react'
import './App.css';
import StudentCard from './components/StudentCard';
import RegisterCourse from './components/RegisterCourse';

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

  const numberOfCourses = useMemo(() => courses.length, [courses])

  return (
    <div>
      <h2>Elvir Avdiji - #132524</h2>
      <div>
        <h1>Courses ({numberOfCourses})</h1>
        <ul>
          {courses.map(course => <StudentCard course={course} key={course.id} />)}
        </ul>
      </div>
      <RegisterCourse setCourses={setCourses} />
    </div>
  )
}

export default App
