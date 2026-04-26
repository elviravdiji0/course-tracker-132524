import { useState } from "react"

export default function RegisterCourse({ setCourses }) {
    const [course, setCourse] = useState({
        name: "",
        credits: 0,
        grade: 0,
        attending: false,
        difficulty: "Moderate"
    });

    const setName = (event) => setCourse(c => {
        return { ...c, name: event.target?.value ?? "" };
    });

    const setCredits = (event) => setCourse(c => {
        return { ...c, credits: Math.min(Number(event.target?.value ?? 0), 6) };
    });

    const setGrade = (event) => setCourse(c => {
        return { ...c, grade: Math.min(Number(event.target?.value ?? 0), 100) };
    });

    const setAttending = (event) => setCourse(c => {
        return { ...c, attending: event.target?.checked ?? false };
    });

    const setDifficulty = (event) => setCourse(c => {
        return { ...c, difficulty: event.target?.value ?? "Moderate" };
    });

    const addCourse = () => {
        setCourses(courses => [...courses, { ...course, id: Date.now() }]);
        setCourse({
            name: "",
            credits: 0,
            grade: 0,
            attending: false,
            difficulty: "Moderate"
        })
    }

    return (
        <div>
            <h2>Register Course</h2>
            <form style={{ border: "solid 1px black", width: "400px", padding: "1rem", borderRadius: ".5rem" }}>
                <Field legend="Course Name" required>
                    <input type="text" required value={course.name} onChange={setName} />
                </Field>
                <Field legend="Course Credits" required>
                    <input type="number" required min={0} max={6} value={course.credits} onChange={setCredits} />
                </Field>
                <Field legend="Course Grade" required>
                    <input type="number" required min={0} max={100} value={course.grade} onChange={setGrade} />
                </Field>
                <Field legend="Attendace">
                    <input id="attendance" name="attendance" type="checkbox" checked={course.attending} onChange={setAttending} />
                    <label htmlFor="attendance">Attending</label>
                </Field>
                <Field legend="Difficulty">
                    <select value={course.difficulty} onChange={setDifficulty}>
                        <option value="Easy">Easy</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Hard">Hard</option>
                    </select>
                </Field>
                <button type="button" onClick={addCourse}>Submit</button>
            </form>
        </div>
    )
}

function Field({ children, legend, required }) {
    return (
        <fieldset style={{ marginBlock: "1rem", border: "none", width: "fit-content" }}>
            <legend>{legend}{required && " *"}</legend>
            {children}
        </fieldset>
    )
}