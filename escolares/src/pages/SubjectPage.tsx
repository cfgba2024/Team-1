import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserRole } from '../components/App'

interface SubjectPageProps {
    user: { id: number; name: string; role: UserRole, schoolId: number }
    subjects: { id: number; name: string; schoolId: number }[]
}

interface Subject {
    id: number
    name: string
    schoolId: number
}

export default function SubjectPage({ user, subjects }: SubjectPageProps) {
  const { id } = useParams<{ id: string }>()
  const subject = subjects.find(s => s.id === Number(id))
  const [activeTab, setActiveTab] = useState('resources')

  if (!subject) {
    return <div>Subject not found</div>
  }

  const tabs = [
    { id: 'resources', label: 'Recursos' },
    { id: 'register', label: 'Registros' },
    { id: 'posts', label: 'Informes' },
    { id: 'stats', label: 'Estadísticas' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{subject.name}</h1>
      <div className="mb-8">
        <nav className="flex border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div>
        {activeTab === 'resources' && <LearningResources user={user} subject={subject} />}
        {activeTab === 'register' && <RegisterData user={user} subject={subject} />}
        {activeTab === 'posts' && <Posts user={user} subject={subject} />}
        {activeTab === 'stats' && <Stats user={user} subject={subject} />}
      </div>
    </div>
  )
}

function LearningResources({ user, subject }: { user: { role: UserRole }, subject: Subject }) {
  const [resources] = useState([
    { id: 1, title: 'Introduction a la apicultura', type: 'document', subjectId: subject.id},
    { id: 2, title: 'Ganadería 101', type: 'document', subjectId: subject.id},
    { id: 3, title: 'Piscicultura para dummies', type: 'video', subjectId: subject.id},
  ])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recursos</h2>
      {user.role === 'teacher' && (
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
          Agregar un nuevo recurso
        </button>
      )}
      <ul className="space-y-4">
        {resources.map(resource => (
          <li key={resource.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold">{resource.title}</h3>
            <p className="text-gray-600">Tipo: {resource.type}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RegisterData({ user, subject }: { user: { role: UserRole }, subject: Subject }) {
  const [entries, setEntries] = useState([
    { id: 1, title: 'Cantidad de ovejas', date: '2024-03-15', description: 'La cantidad de ovejas es 10', subject: subject },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add new entry to the entries list
    // Get title from form input
    const title = (e.target as HTMLFormElement).elements.namedItem('title') as HTMLInputElement
    const description = (e.target as HTMLFormElement).elements.namedItem('description') as HTMLInputElement
    setEntries([
      ...entries,
      { id: entries.length + 1, title: title.value, date: new Date().toISOString(), description: description.value, subject: subject },
    ])
    
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Register Data</h2>
      {user.role === 'student' && (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Descripción
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Subir registro
          </button>
        </form>
      )}
      <div>
        <h3 className="text-xl font-bold mb-4">Registros de hoy</h3>
        {user.role === 'teacher' ? (
          <div>
            {entries.map(entry => (
              <div key={entry.id} className="bg-white shadow rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold">{entry.title}</h4>
                <p className="text-gray-600">{entry.date}</p>
                <p>{entry.description}</p>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Confirmar</span>
                  </label>
                </div>
              </div>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Guardar registros confirmados
            </button>
          </div>
        ) : (
          <ul className="space-y-4">
            {entries.map(entry => (
              <li key={entry.id} className="bg-white shadow rounded-lg p-4">
                <h4 className="text-lg font-semibold">{entry.title}</h4>
                <p className="text-gray-600">{entry.date}</p>
                <p>{entry.description}</p>
                {user.role === 'student' && (
                  <div className="mt-2 space-x-2">
                    <button className="text-blue-600 hover:underline">Editar</button>
                    <button className="text-red-600 hover:underline">Borrar</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function Posts({ user, subject }: { user: { role: UserRole }, subject: Subject }) {
  const [posts] = useState([
    { id: 1, title: 'Un proyecto para el agua y la alimentación saludable', date: '2024-03-14', description: 'Descripción del post 1...', content: 'Contenido del post 1...'},
    { id: 2, title: 'Desarrollo ganadero en Buenos Aires', date: '2024-03-13', description: 'Descripción del post 2...', content: 'Contenido del post 2...'},
    { id: 3, title: 'Análisis de la educación rural en pandemia', date: '2024-03-12', description: 'Descripción del post 3...', content: 'Contenido del post 3...'},
  ])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {user.role === 'teacher' && (
        <div className="mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded mr-4">
            Agregar un nuevo post para la materia {subject.name}
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            Así debe lucir un post
          </button>
        </div>
      )}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Stats({ user, subject }: { user: { role: UserRole }, subject: Subject }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Stats</h2>
      <p>Hola {user.role} </p>
      <p>Las estadísticas sobre {subject.name} van a aparecer acá</p>
    </div>
  )
}