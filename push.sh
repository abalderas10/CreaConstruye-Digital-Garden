#!/bin/bash

# Script para hacer push a GitHub con token

echo "🚀 CreaConstruye Digital Garden - Push Helper"
echo ""
echo "Este script te ayudará a conectar y hacer push a GitHub."
echo ""

read -p "Ingresa tu usuario de GitHub: " GITHUB_USER
read -sp "Ingresa tu Personal Access Token: " GITHUB_TOKEN
echo ""

# Configurar remote
REPO_URL="https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/CreaConstruye-Digital-Garden.git"

echo ""
echo "🔗 Conectando repositorio..."
git remote add origin "$REPO_URL"

echo "📤 Haciendo push a main..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Push exitoso!"
    echo ""
    echo "Tu sitio estará disponible en:"
    echo "https://${GITHUB_USER}.github.io/CreaConstruye-Digital-Garden"
    echo ""
    echo "🎯 Próximo paso: Activa GitHub Pages en Settings"
else
    echo ""
    echo "❌ Error en el push. Verifica tu token y usuario."
fi
