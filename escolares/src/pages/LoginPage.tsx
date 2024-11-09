import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginPageProps {
  onLogin: (userId: number) => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(Number(userId))
    navigate(`/${userId === '1' ? 'student' : userId === '2' ? 'teacher' : 'parent'}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      <h2 className="text-3xl font-bold text-primary mb-8">Ingresá a Escolares</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="userId" className="block text-gray-700 text-sm font-bold mb-2">
            ID de usuario
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your user ID"
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