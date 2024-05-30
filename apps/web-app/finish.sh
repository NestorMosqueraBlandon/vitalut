#!/bin/bash

# Verificar si la compilación finalizó correctamente
if [ $? -eq 0 ]; then
  # La compilación finalizó correctamente
  echo "Compilación finalizada correctamente"
  # Ejecutar acciones adicionales (opcional)
  # ...
else
  # La compilación falló
  echo "Error en la compilación"
  exit 1
fi
