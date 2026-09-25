@echo off
echo ===================================================
echo Starting MIT Campus Chatbot & Interactive Map...
echo ===================================================

cd /d "%~dp0"
set "PATH=%~dp0tools\node-v20.18.0-win-x64;%PATH%"

cd frontend
echo Running Vite dev server at http://localhost:5173/ ...
start http://localhost:5173/
npm run dev
pause
