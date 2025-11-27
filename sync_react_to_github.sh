#!/bin/bash

# =========================
# CONFIGURACIÓN
# =========================

BITBUCKET_PATH="/home/coboy/Documentos/Proyectos/Flutter/konecta_apps/v.02/react_demo_template"
GITHUB_PATH="/home/coboy/Documentos/Proyectos/Flutter/Coboy/react_demo_template"
BRANCH="main"

COMMIT_MSG="Sync automático desde Bitbucket - $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 Iniciando sincronización..."

# =========================
# VALIDACIONES
# =========================

if [ ! -d "$BITBUCKET_PATH" ]; then
  echo "❌ No existe el proyecto Bitbucket en: $BITBUCKET_PATH"
  exit 1
fi

if [ ! -d "$GITHUB_PATH/.git" ]; then
  echo "❌ El proyecto GitHub no parece ser un repo git válido"
  exit 1
fi

# =========================
# COPIA DEL CÓDIGO
# =========================

echo "📂 Copiando archivos desde Bitbucket a GitHub..."

rsync -av --delete \
  --exclude='.git' \
  --exclude='.github' \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='build' \
  "$BITBUCKET_PATH/" "$GITHUB_PATH/"

# =========================
# GIT OPERACIONES
# =========================

cd "$GITHUB_PATH" || exit

echo "📦 Agregando cambios..."
git add .

if git diff --cached --quiet; then
  echo "✅ No hay cambios para subir."
  exit 0
fi

echo "📝 Creando commit..."
git commit -m "$COMMIT_MSG"

echo "☁️ Subiendo a GitHub..."
git push origin $BRANCH

echo "🎉 Sincronización completada con éxito"
