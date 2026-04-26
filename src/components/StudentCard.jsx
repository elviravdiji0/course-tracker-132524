export default function StudentCard({ course }) {
    return (
        <div style={{ marginBlock: "3rem", border: "solid 1px black", width: "400px", padding: "1rem", borderRadius: ".5rem" }}>
            <p>Name: {course.name}</p>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>
            {(course.grade < 50 && course.attending === false) && <p>At risk ⚠️</p>}
            {course.grade >= 85 && <p>Eligible for distinction 👏</p>}
        </div>
    )
}