import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StudentList from './components/StudentList'
import Footer from './components/Footer'

const students = [
  {
    id: 1,
    name: 'Manu',
    program: 'Computer Science Engineering',
    age: 20,
    grade: 'A+'
  },
  {
    id: 2,
    name: 'Ayan',
    program: 'Electronics Engineering',
    age: 21,
    grade: 'A'
  },
  {
    id: 3,
    name: 'Sarvesh',
    program: 'Information Technology',
    age: 19,
    grade: 'A'
  }
]

const menuItems = ['Home', 'Students', 'Courses', 'Settings']

function App() {
  return (
    <main className="page">
      <Header title="Academic Dashboard" subtitle="Student Records" />

      <div className="content-row">
        <Sidebar menuItems={menuItems} />
        <StudentList heading="Student Records" students={students} />
      </div>

      <Footer totalStudents={students.length} note="Built for Unit 1.1 Hard" />
    </main>
  )
}

export default App
