@echo off
set "ROOT=%~dp0"
cd /d "%ROOT%"

echo ======================================================
echo     SISTEMA DE INVENTARIO GHALOCAFE - INCIADOR
echo ======================================================
echo.

echo [1/3] Iniciando BACKEND (API)...
start "GHALOCAFE-BACKEND" cmd /k "cd /d "%ROOT%backend" && echo Iniciando Backend... && npm run dev"

echo [2/3] Iniciando FRONTEND (Interfaz)...
start "GHALOCAFE-FRONTEND" cmd /k "cd /d "%ROOT%frontend" && echo Iniciando Frontend... && npm run dev"

echo.
echo [3/3] Abriendo navegador...
echo Esperando a que los servicios carguen (8 segundos)...
timeout /t 8 /nobreak > nul

start http://localhost:5173

echo.
echo ------------------------------------------------------
echo Los servidores estan corriendo en las otras ventanas.
echo NO las cierres mientras uses la aplicacion.
echo ------------------------------------------------------
echo.
pause
exit
