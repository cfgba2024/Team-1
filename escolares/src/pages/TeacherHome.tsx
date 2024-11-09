import React from 'react'
import { Link } from 'react-router-dom'
import { UserRole } from '../components/App'

interface TeacherHomeProps {
  user: { id: number; name: string; role: UserRole, schoolId: number }
  subjects: { id: number; name: string; schoolId: number }[]
}

export default function TeacherHome({ user, subjects }: TeacherHomeProps) {
  const teacherSubjects = subjects.filter(subject => subject.schoolId === user.schoolId)
  const otherSubjects = subjects.filter(subject => subject.schoolId !== user.schoolId)

  return (
    <div className="flex">
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">My Subjects</h2>
        <ul>
          {teacherSubjects.map(subject => (
            <li key={subject.id} className="mb-2">
              <Link to={`/subject/${subject.id}`} className="text-blue-600 hover:underline">
                {subject.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-4">Todas las actividades</h2>
        <ul>
          {otherSubjects.map(subject => (
            <li key={subject.id} className="mb-2">
              <Link to={`/subject/${subject.id}`} className="text-blue-600 hover:underline">
                {subject.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Welcome, {user.name}</h1>
        <p className="text-xl">Elegí una actividad de la lista para manejar sus contenidos.</p>
      </main>
    </div>
  )
}