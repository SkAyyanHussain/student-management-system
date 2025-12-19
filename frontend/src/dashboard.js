import { useEffect, useState } from "react";
import { getStudents } from "./api";

export default function Dashboard({ token }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents(token).then(setStudents);
  }, []);

  return (
    <ul>
      {students.map(s => (
        <li key={s._id}>{s.name} - {s.course}</li>
      ))}
    </ul>
  );
}
