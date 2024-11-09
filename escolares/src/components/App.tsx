import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import StudentHome from '../pages/StudentHome'
import TeacherHome from '../pages/TeacherHome'
import ParentHome from '../pages/ParentHome'
import SubjectPage from '../pages/SubjectPage'

// import data from utils/data (schools is not imported) 
import { users, subjects } from '@/utils/data'


export type UserRole = 'student' | 'teacher' | 'parent'

export default function App() {
  const [user, setUser] = useState<{ id: number; name: string; role: UserRole; schoolId: number } | null>(null)

  const login = (userId: number) => {
    const loggedInUser = users.find(u => u.id === userId) as { id: number; name: string; role: UserRole; schoolId: number }
    if (loggedInUser) {
      setUser(loggedInUser)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header user={user} onLogout={logout} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={login} />} />
          <Route
            path="/student"
            element={user && user.role === 'student' && user.schoolId ? <StudentHome user={user as { id: number; name: string; role: UserRole; schoolId: number }} subjects={subjects} /> : <Navigate to="/login" />}
          />
          <Route
            path="/teacher"
            element={user && user.role === 'teacher' && user.schoolId ? <TeacherHome user={user as { id: number; name: string; role: UserRole; schoolId: number }} subjects={subjects} /> : <Navigate to="/login" />}
          />
          <Route
            path="/parent"
            element={user && user.role === 'parent' ? <ParentHome subjects={subjects} /> : <Navigate to="/login" />}
          />
          <Route
            path="/subject/:id"
            element={user ? <SubjectPage user={user} subjects={subjects} /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}