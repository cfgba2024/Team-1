import React from 'react'
import { Link } from 'react-router-dom'

interface ParentHomeProps {
  subjects: { id: number; name: string; schoolId: number }[]
}

export default function ParentHome({ subjects }: ParentHomeProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Todas las actividades</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map(subject => (
          <Link
            key={subject.id}
            to={`/subject/${subject.id}`}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-2">{subject.name}</h2>
            <p className="text-gray-600">Ver informes sobre esta actividad</p>
          </Link>
        ))}
      </div>
    </div>
  )
}