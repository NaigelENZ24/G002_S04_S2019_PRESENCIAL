// ── Helpers ──────────────────────────────────────────────
function mostrarError(campoId, errorId, mensaje) {
  const input = document.getElementById(campoId);
  const span  = document.getElementById(errorId);
  input.classList.add('invalid');
  span.textContent = mensaje;
}

function limpiarError(campoId, errorId) {
  const input = document.getElementById(campoId);
  const span  = document.getElementById(errorId);
  input.classList.remove('invalid');
  span.textContent = '';
}

// ── Validación principal ──────────────────────────────────
function validarFormulario() {
  const nombre   = document.getElementById('nombre').value.trim();
  const correo   = document.getElementById('correo').value.trim();
  const password = document.getElementById('password').value;

  // Limpiar errores previos
  limpiarError('nombre',   'error-nombre');
  limpiarError('correo',   'error-correo');
  limpiarError('password', 'error-password');

  let valido = true;

  // Validar nombre
  if (nombre === '') {
    mostrarError('nombre', 'error-nombre', 'El nombre no puede estar vacío.');
    valido = false;
  }

  // Validar correo: no vacío y formato correcto
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === '') {
    mostrarError('correo', 'error-correo', 'El correo no puede estar vacío.');
    valido = false;
  } else if (!regexCorreo.test(correo)) {
    mostrarError('correo', 'error-correo', 'Ingresa un correo válido (ej: user@mail.com).');
    valido = false;
  }

  // Validar contraseña: mínimo 8 caracteres
  if (password.length < 8) {
    mostrarError('password', 'error-password', 'La contraseña debe tener al menos 8 caracteres.');
    valido = false;
  }

  // Si todo es válido, mostrar alert de éxito
  if (valido) {
    alert('¡Registro exitoso! Bienvenido, ' + nombre + '.');
  }
}
