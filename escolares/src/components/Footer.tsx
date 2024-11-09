import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">40 años</h3>
            <p className="text-sm">Comprometidos con la educación rural</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Nuestras acciones</h3>
            <p className="text-sm">Trabajando por la educación rural</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Escuelas y comunidades rurales</h3>
            <p className="text-sm">Fortaleciendo vínculos</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Educación intercultural</h3>
            <p className="text-sm">Respetando la diversidad</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Fundacion Escolares. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}