const schools = [
    { id: 1, name: 'School A', province: 'Province 1' },
    { id: 2, name: 'School B', province: 'Province 2' },
]
  
const subjects = [
    { id: 1, name: 'Ganadería', schoolId: 1 },
    { id: 2, name: 'Apicultura', schoolId: 1 },
    { id: 3, name: 'Vivero', schoolId: 2 },
    { id: 4, name: 'Horticultura', schoolId: 2 },
    { id: 5, name: 'Piscicultura', schoolId: 1 },
    { id: 6, name: 'Agricultura', schoolId: 2 },
    { id: 7, name: 'Agroindustria', schoolId: 1 },
  ]
  
const users = [
    { id: 1, name: 'Juan Alumno', role: 'student', schoolId: 1 },
    { id: 2, name: 'Juana Profesora', role: 'teacher', schoolId: 1 },
    { id: 3, name: 'Roberto Padre', role: 'parent' },
]

const learningResources = [
    { id: 1, title: 'Introduction a la apicultura', type: 'document', subjectId: 2},
    { id: 2, title: 'Ganadería 101', type: 'document', subjectId: 1},
    { id: 3, title: 'Piscicultura para dummies', type: 'video', subjectId: 5},
]

const activityEntries = [
    { id: 1, title: 'Cantidad de ovejas', date: '2024-03-15', description: 'La cantidad de ovejas es 10', subject: 1 },
    { id: 2, title: 'Algo sobre peces', date: '2024-03-14', description: 'La información sobre peces es que ...', subject: 5 },
]

const activityPosts = [
    { id: 1, title: 'Un proyecto para el agua y la alimentación saludable', date: '2024-03-14', description: 'Descripción del post 1...', content: 'Contenido del post 1...', subject: 5},
    { id: 2, title: 'Desarrollo ganadero en Buenos Aires', date: '2024-03-13', description: 'Descripción del post 2...', content: 'Contenido del post 2...', subject: 1},
    { id: 3, title: 'Análisis de la educación rural en pandemia', date: '2024-03-12', description: 'Descripción del post 3...', content: 'Contenido del post 3...', subject: 2},
]

export { schools, subjects, users, learningResources, activityEntries, activityPosts }