import React from 'react'
import { Link } from 'react-router-dom'
import { UserRole } from '../components/App'

interface StudentHomeProps {
  user: { id: number; name: string; role: UserRole, schoolId: number }
  subjects: { id: number; name: string; schoolId: number }[]
}

export default function StudentHome({ user, subjects }: StudentHomeProps) {
  const studentSubjects = subjects.filter(subject => subject.schoolId === user.schoolId)
  const otherSchoolSubjects = subjects.filter(subject => subject.schoolId !== user.schoolId)

  return (
    <div className="flex">
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Mis actividades</h2>
        <ul>
          {studentSubjects.map(subject => (
            <li key={subject.id} className="mb-2">
              <Link to={`/subject/${subject.id}`} className="text-blue-600 hover:underline">
                {subject.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-4">Actividades de otras escuelas</h2>
        <ul>
          {otherSchoolSubjects.map(subject => (
            <li key={subject.id} className="mb-2">
              <Link to={`/subject/${subject.id}`} className="text-blue-600 hover:underline">
                {subject.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Bienvenido, {user.name}</h1>
        <p className="text-xl">¡Elegí una actividad para comenzar!</p>
      </main>
    </div>
  )
}