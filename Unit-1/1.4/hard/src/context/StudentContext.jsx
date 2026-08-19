import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { seedStudents } from "../data/seedStudents";

const STORAGE_KEY = "student-management-system-v2";

const StudentContext = createContext(null);

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `stu-${Date.now()}`;
}

function loadStudents() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return seedStudents;
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : seedStudents;
  } catch {
    return seedStudents;
  }
}

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(loadStudents);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const value = useMemo(() => {
    function addStudent(payload) {
      const newStudent = {
        ...payload,
        id: createId(),
        marks: Number(payload.marks),
      };

      setStudents((prev) => [newStudent, ...prev]);
      return newStudent;
    }

    function updateStudent(studentId, payload) {
      let updatedStudent = null;

      setStudents((prev) =>
        prev.map((student) => {
          if (student.id !== studentId) return student;

          updatedStudent = {
            ...student,
            ...payload,
            marks: Number(payload.marks),
          };

          return updatedStudent;
        }),
      );

      return updatedStudent;
    }

    function deleteStudent(studentId) {
      setStudents((prev) => prev.filter((student) => student.id !== studentId));
    }

    function getStudentById(studentId) {
      return students.find((student) => student.id === studentId) || null;
    }

    return {
      students,
      addStudent,
      updateStudent,
      deleteStudent,
      getStudentById,
    };
  }, [students]);

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}

export function useStudents() {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudents must be used inside StudentProvider");
  }

  return context;
}
