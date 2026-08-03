import './App.css'
import StudentCard from './components/StudentCard'

const students = [
  { id: 1, name: 'shivam', course: 'Computer Science Engineering', age: 20 },
  { id: 2, name: 'sarvesh', course: 'Computer Science Engineering', age: 20 },
  { id: 3, name: 'manu', course: 'Computer Science Engineering', age: 20 }
]

function App() {
  return (
    <main className="page">
      {students.map(student => (
        <StudentCard key={student.id} {...student} />
      ))}
    </main>
  )
}

export default App
