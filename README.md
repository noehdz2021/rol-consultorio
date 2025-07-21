# 🏥 Rol de Consultorio - Aplicación Web

Una aplicación web moderna para consultar los turnos del personal médico según el rol de consultorio.

## 📋 Características

- **Interfaz moderna y responsiva** con diseño atractivo
- **Selección de usuario** mediante lista desplegable
- **Visualización de próximos 10 turnos** con fechas y ubicaciones
- **Indicadores de color** para cada miembro del personal
- **Estadísticas básicas** (total de turnos, próximo turno)
- **Persistencia de datos** (recuerda la selección del usuario)
- **Diseño responsivo** para móviles y tablets

## 👥 Personal del Consultorio

- **AZUCENA** - Color verde claro
- **ADDY** - Color azul claro  
- **CARMEN** - Color rosa

## 🏢 Ubicaciones

- **CENTENARIO**
- **ARCOS**
- **SAN MATEO**

## 🚀 Cómo usar

1. **Abrir la aplicación**: Abre `index.html` en tu navegador web
2. **Seleccionar usuario**: Elige tu nombre de la lista desplegable
3. **Ver turnos**: La aplicación mostrará automáticamente tus próximos 10 turnos
4. **Información mostrada**:
   - Fecha completa del turno
   - Ubicación del consultorio
   - Estadísticas de turnos

## 📅 Datos del Rol

La aplicación incluye turnos desde mayo 2025 hasta diciembre 2025, con el siguiente patrón:

- **Sábados**: Van 3 personas (1 en cada consultorio: CENTENARIO, ARCOS, SAN MATEO)
- **Domingos**: Solo va 1 persona únicamente en CENTENARIO
- **Rotación del personal** (AZUCENA, ADDY, CARMEN) entre ubicaciones

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura de la página
- **CSS3** - Estilos y diseño responsivo
- **JavaScript ES6+** - Lógica de la aplicación
- **Google Fonts** - Tipografía Inter

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Móviles y tablets

## 🔧 Funcionalidades técnicas

- **LocalStorage**: Guarda la selección del usuario
- **Fechas dinámicas**: Solo muestra turnos futuros
- **Ordenamiento**: Turnos ordenados por fecha
- **Formateo**: Fechas en español con formato completo

## 📊 Estructura de archivos

```
rol/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este archivo
```

## 🎨 Personalización

Los colores de cada usuario se pueden modificar en el archivo `script.js`:

```javascript
const userColors = {
    "AZUCENA": "#10b981", // Verde claro
    "ADDY": "#3b82f6",    // Azul claro
    "CARMEN": "#ec4899"   // Rosa
};
```

## 🔮 Funciones adicionales

La aplicación incluye funciones para debugging accesibles desde la consola del navegador:

```javascript
// Obtener próximos turnos de un usuario
scheduleApp.getUpcomingShifts("AZUCENA");

// Obtener estadísticas detalladas
scheduleApp.getShiftStats("AZUCENA");

// Ver todos los datos del rol
scheduleApp.scheduleData;
```

## 📝 Notas

- La aplicación solo muestra turnos futuros desde la fecha actual
- Los datos están basados en el rol mostrado en la imagen
- Se extiende el patrón hasta diciembre 2025 para tener suficientes turnos futuros
- La aplicación es completamente offline y no requiere conexión a internet

---

**Desarrollado para el sistema de rol de consultorio médico** 🏥 