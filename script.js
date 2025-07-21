// Datos del rol basados en la imagen - Patrón correcto
const scheduleData = [
    // Mayo 2025
    { date: "2025-05-17", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-05-17", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-05-17", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-05-18", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-05-24", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-05-24", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-05-24", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-05-25", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-05-31", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-05-31", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-05-31", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    
    // Junio 2025
    { date: "2025-06-01", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-06-07", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-06-07", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-06-07", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-06-08", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-06-14", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-06-14", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-06-14", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-06-15", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-06-21", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-06-21", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-06-21", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-06-22", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-06-28", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-06-28", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-06-28", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-06-29", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    // Julio 2025
    { date: "2025-07-05T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-07-05T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-07-05T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-07-06T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-07-12T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-07-12T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-07-12T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-07-13T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-07-19T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-07-19T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-07-19T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-07-20T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-07-26T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-07-26T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-07-26T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-07-27T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    // Agosto 2025 (fechas correctas)
    { date: "2025-08-02T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-08-02T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-08-02T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-08-03T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-08-09T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-08-09T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-08-09T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-08-10T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-08-16T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-08-16T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-08-16T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-08-17T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-08-23T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-08-23T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-08-23T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-08-24T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-08-30T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-08-30T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-08-30T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-08-31T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    // Septiembre 2025
    { date: "2025-09-06T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-09-06T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-09-06T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-09-07T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-09-13T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-09-13T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-09-13T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-09-14T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-09-20T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-09-20T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-09-20T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-09-21T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-09-27T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-09-27T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-09-27T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-09-28T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    // Octubre 2025
    { date: "2025-10-04T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-10-04T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-10-04T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-10-05T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-10-11T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-10-11T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-10-11T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-10-12T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-10-18T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-10-18T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-10-18T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-10-19T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-10-25T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-10-25T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-10-25T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-10-26T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    // Noviembre 2025
    { date: "2025-11-01T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-11-01T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-11-01T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-11-02T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-11-08T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-11-08T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-11-08T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-11-09T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-11-15T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-11-15T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-11-15T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-11-16T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-11-22T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-11-22T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-11-22T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-11-23T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-11-29T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-11-29T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-11-29T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-11-30T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    // Diciembre 2025
    { date: "2025-12-06T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-12-06T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-12-06T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-12-07T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" },
    
    { date: "2025-12-13T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "CARMEN" },
    { date: "2025-12-13T00:00:00", day: "Sábado", location: "ARCOS", staff: "AZUCENA" },
    { date: "2025-12-13T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "ADDY" },
    { date: "2025-12-14T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "ADDY" },
    
    { date: "2025-12-20T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "AZUCENA" },
    { date: "2025-12-20T00:00:00", day: "Sábado", location: "ARCOS", staff: "ADDY" },
    { date: "2025-12-20T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "CARMEN" },
    { date: "2025-12-21T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "CARMEN" },
    
    { date: "2025-12-27T00:00:00", day: "Sábado", location: "CENTENARIO", staff: "ADDY" },
    { date: "2025-12-27T00:00:00", day: "Sábado", location: "ARCOS", staff: "CARMEN" },
    { date: "2025-12-27T00:00:00", day: "Sábado", location: "SAN MATEO", staff: "AZUCENA" },
    { date: "2025-12-28T00:00:00", day: "Domingo", location: "CENTENARIO", staff: "AZUCENA" }
];

// Colores para cada persona (basados en la imagen)
const userColors = {
    "AZUCENA": "#10b981", // Verde claro
    "ADDY": "#3b82f6",    // Azul claro
    "CARMEN": "#ec4899"   // Rosa
};

// Elementos del DOM
const userSelect = document.getElementById('userSelect');
const resultsContainer = document.getElementById('results');
const loadingElement = document.getElementById('loading');
const userNameElement = document.getElementById('userName');
const userColorIndicator = document.getElementById('userColorIndicator');
const scheduleList = document.getElementById('scheduleList');
const totalShiftsElement = document.getElementById('totalShifts');
const nextShiftElement = document.getElementById('nextShift');

// Función para formatear fechas
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('es-ES', options);
}

// Función para obtener la fecha actual en formato YYYY-MM-DD
function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Función para normalizar fechas (convertir a formato YYYY-MM-DD para comparación)
function normalizeDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}

// Función para obtener los próximos turnos de un usuario
function getUpcomingShifts(userName, limit = 10) {
    const currentDate = getCurrentDate();
    const userShifts = [];
    
    // Filtrar turnos del usuario que sean futuros
    for (const shift of scheduleData) {
        const shiftDate = normalizeDate(shift.date);
        if (shift.staff === userName && shiftDate >= currentDate) {
            userShifts.push({
                date: shiftDate,
                ...shift
            });
        }
    }
    
    // Ordenar por fecha y limitar a los próximos 10
    return userShifts
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, limit);
}

// Función para mostrar los resultados
function showResults(userName) {
    const shifts = getUpcomingShifts(userName);
    
    // Mostrar información del usuario
    userNameElement.textContent = userName;
    userColorIndicator.style.backgroundColor = userColors[userName];
    
    // Limpiar lista anterior
    scheduleList.innerHTML = '';
    
    // Agregar turnos a la lista
    shifts.forEach(shift => {
        const shiftElement = document.createElement('div');
        shiftElement.className = `schedule-item ${userName.toLowerCase()}`;
        
        const dateElement = document.createElement('span');
        dateElement.className = 'schedule-date';
        dateElement.textContent = formatDate(shift.date);
        
        const locationElement = document.createElement('span');
        locationElement.className = 'schedule-location';
        locationElement.textContent = shift.location;
        
        shiftElement.appendChild(dateElement);
        shiftElement.appendChild(locationElement);
        scheduleList.appendChild(shiftElement);
    });
    
    // Actualizar estadísticas
    totalShiftsElement.textContent = shifts.length;
    
    if (shifts.length > 0) {
        const nextShift = formatDate(shifts[0].date);
        nextShiftElement.textContent = nextShift.split(',')[0]; // Solo el día
    } else {
        nextShiftElement.textContent = 'No hay turnos';
    }
    
    // Mostrar resultados
    resultsContainer.style.display = 'block';
}

// Función para simular carga
function showLoading() {
    loadingElement.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    setTimeout(() => {
        loadingElement.style.display = 'none';
    }, 1000);
}

// Event listener para el cambio de selección
userSelect.addEventListener('change', function() {
    const selectedUser = this.value;
    
    if (selectedUser) {
        showLoading();
        
        // Simular un pequeño delay para mostrar el loading
        setTimeout(() => {
            showResults(selectedUser);
        }, 800);
    } else {
        resultsContainer.style.display = 'none';
    }
});

// Función para inicializar la aplicación
function initApp() {
    // Verificar si hay un usuario guardado en localStorage
    const savedUser = localStorage.getItem('selectedUser');
    if (savedUser) {
        userSelect.value = savedUser;
        showResults(savedUser);
    }
}

// Guardar selección en localStorage
userSelect.addEventListener('change', function() {
    if (this.value) {
        localStorage.setItem('selectedUser', this.value);
    } else {
        localStorage.removeItem('selectedUser');
    }
});

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', initApp);

// Función para obtener estadísticas adicionales (opcional)
function getShiftStats(userName) {
    const allShifts = getUpcomingShifts(userName, 100); // Obtener más turnos para estadísticas
    
    const stats = {
        total: allShifts.length,
        byLocation: {},
        byMonth: {}
    };
    
    allShifts.forEach(shift => {
        // Estadísticas por ubicación
        stats.byLocation[shift.location] = (stats.byLocation[shift.location] || 0) + 1;
        
        // Estadísticas por mes
        const month = new Date(shift.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
        stats.byMonth[month] = (stats.byMonth[month] || 0) + 1;
    });
    
    return stats;
}

// Exportar funciones para uso en consola (debugging)
window.scheduleApp = {
    getUpcomingShifts,
    getShiftStats,
    scheduleData,
    userColors
}; 