@echo off
echo ========================================
echo   JINJA SAFARIS - Quick Setup Script
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully!
echo.

echo [2/3] Checking environment variables...
if not exist .env.local (
    echo WARNING: .env.local file not found!
    echo Please create .env.local file with your Supabase credentials
    echo See .env.example for template
    echo.
    pause
) else (
    echo ✓ Environment file found!
)
echo.

echo [3/3] Setup complete!
echo.
echo ========================================
echo   NEXT STEPS:
echo ========================================
echo 1. Make sure .env.local is configured
echo 2. Run: npm run dev
echo 3. Open: http://localhost:3000
echo 4. Login to admin: http://localhost:3000/admin
echo.
echo For detailed instructions, see:
echo - GETTING_STARTED.md
echo - QUICKSTART.md
echo ========================================
echo.
pause
