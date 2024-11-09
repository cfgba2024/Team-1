import React from 'react'
import { Link } from 'react-router-dom'
import { UserRole } from './App'

interface HeaderProps {
  user: { id: number; name: string; role: UserRole } | null
  onLogout: () => void
}

export default function Header({ user, onLogout }: HeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">Fundacion Escolares</span>
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>Bienvenido, {user.name}</span>
              <button
                onClick={onLogout}
                className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Ingresar
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}