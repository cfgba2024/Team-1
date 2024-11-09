const schools = [
    { id: 1, name: 'School A', province: 'Province 1' },
    { id: 2, name: 'School B', province: 'Province 2' },
]
  
const subjects = [
    { id: 1, name: 'Ganadería', schoolId: 1 },
    { id: 2, name: 'Apicultura', schoolId: 1 },
    { id: 3, name: 'Vivero', schoolId: 2 },
    { id: 4, name: 'Horticultura', schoolId: 1 },
    { id: 5, name: 'Piscicultura', schoolId: 1 },
    { id: 6, name: 'Agricultura', schoolId: 2 },
    { id: 7, name: 'Agroindustria', schoolId: 1 },
  ]
  
const users = [
    { id: 1, name: 'Juan Alumno', role: 'student', schoolId: 1, username: 'juan'},
    { id: 2, name: 'Juana Profesora', role: 'teacher', schoolId: 1, username: 'juana'},
    { id: 3, name: 'Roberto Padre', role: 'parent', username: 'roberto'},
]

const learningResources = [
    { id: 1, title: 'Plantación de tomates', type: 'documento', subjectId: 4},
    { id: 2, title: 'Ganadería 101', type: 'documento', subjectId: 1},
    { id: 3, title: 'Tu primera huerta', type: 'video', subjectId: 4},
]

const activityEntries = [
    { id: 1, title: 'Cantidad de ovejas', date: '2024-03-15', description: 'La cantidad de ovejas es 10', subject: 1 },
    { id: 2, title: 'Cantidad de tomates', date: '2024-03-15', description: 'La cantidad de tomates es 10', subject: 4 },
    { id: 3, title: 'Cantidad de zapallos', date: '2024-03-15', description: 'La cantidad de zapallos es 5', subject: 4 },
    { id: 4, title: 'Estado de las papas', date: '2024-03-15', description: 'Una papa ...', subject: 4 },
]

const activityPosts = [
    { id: 1, title: 'Un proyecto para el agua y la alimentación saludable', date: '2024-03-14', description: 'Descripción del post 1...', content: 'Contenido del post 1...', subject: 5},
    { id: 2, title: 'Desarrollo ganadero en Buenos Aires', date: '2024-03-13', description: 'Descripción del post 2...', content: 'Contenido del post 2...', subject: 1},
    { id: 3, title: 'Huertas Hidroponicas', date: '2024-03-12', description: 'Descripción del post.. ', content: 'Una huerta hidropónica es un sistema de cultivo de plantas que utiliza agua con nutrientes en lugar de suelo. En este método, se depositan en el agua los nutrientes necesarios para que las plantas crezcan.. ', subject: 4},
]

export { schools, subjects, users, learningResources, activityEntries, activityPosts }