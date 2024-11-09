import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginPageProps {
  onLogin: (userId: number) => void
}

// import data from utils/data 
import { users } from '@/utils/data'

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // based on the username, we can determine the user id
    const user = users.find(u => u.username === username)
    if (!user) {
      alert('Usuario no encontrado')
      return
    }

    const userId = user.id

    onLogin(Number(userId))
    navigate(`/${userId == 1 ? 'student' : userId == 2 ? 'teacher' : 'parent'}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      <h2 className="text-3xl font-bold text-primary mb-8">Ingresá a Escolares</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="userId" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="userId"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingresá tu nombre de usuario"
            required
          />
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingresá tu contraseña"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}