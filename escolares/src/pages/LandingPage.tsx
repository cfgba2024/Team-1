import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Users, School, GraduationCap, LucideIcon } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 md:text-6xl">
            Educación para el Desarrollo Rural Sostenible
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Conectando escuelas, estudiantes y comunidades para un futuro mejor
          </p>
          <Link
            to="/login"
            className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Comenzar
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={BookOpen}
            title="Recursos Educativos"
            description="Acceso a materiales de aprendizaje de calidad"
          />
          <FeatureCard
            icon={Users}
            title="Comunidad"
            description="Conexión entre estudiantes, docentes y padres"
          />
          <FeatureCard
            icon={School}
            title="Escuelas Rurales"
            description="Fortaleciendo la educación rural"
          />
          <FeatureCard
            icon={GraduationCap}
            title="Desarrollo"
            description="Promoviendo el desarrollo sostenible"
          />
        </div>
      </section>
    </div>
  )
}


function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}