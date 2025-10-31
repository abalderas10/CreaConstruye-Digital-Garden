# 🚀 Guía Completa: Publicar tu Digital Garden

## Paso 1️⃣: Verificar Git está instalado

```bash
git --version
```

Si no está instalado, en Termux:
```bash
apt update && apt install git
```

## Paso 2️⃣: Configurar Git (primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

## Paso 3️⃣: Inicializar tu repositorio local

```bash
cd ~/CreaConstruye-Digital-Garden
git init
git add .
git commit -m "Initial commit: Digital Garden setup"
```

## Paso 4️⃣: Crear repositorio en GitHub

1. Abre [github.com](https://github.com)
2. Inicia sesión con tu cuenta
3. Haz clic en **+** (arriba a la derecha) → **New repository**
4. Rellena lo siguiente:
   - **Repository name**: `CreaConstruye-Digital-Garden`
   - **Description**: Tu jardín digital de conocimiento
   - **Public**: ✅ Marca esta opción
   - **Initialize with**: Déjalo vacío (ya tenemos archivos)
5. Haz clic en **Create repository**

## Paso 5️⃣: Conectar tu repositorio local con GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Ejecuta en Termux:

```bash
cd ~/CreaConstruye-Digital-Garden
git remote add origin https://github.com/TU-USUARIO/CreaConstruye-Digital-Garden.git
git branch -M main
git push -u origin main
```

**⚠️ Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub**

Si pide contraseña, usa tu **Personal Access Token**:
1. Ve a [github.com/settings/tokens](https://github.com/settings/tokens)
2. Haz clic en **Generate new token**
3. Dale un nombre como "Digital Garden"
4. Selecciona `repo` y `admin:public_repo`
5. Haz clic en **Generate**
6. Copia el token y úsalo como contraseña

## Paso 6️⃣: Activar GitHub Pages

1. Ve a tu repositorio en GitHub: `github.com/TU-USUARIO/CreaConstruye-Digital-Garden`
2. Haz clic en **Settings** (última pestaña)
3. En el menú izquierdo, haz clic en **Pages**
4. Bajo "Source", selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
5. Haz clic en **Save**

## Paso 7️⃣: Esperar y verificar

GitHub tardará 2-3 minutos en generar tu sitio. Luego:

1. Ve a `https://github.com/TU-USUARIO/CreaConstruye-Digital-Garden`
2. En la sección "About", verás un enlace a tu sitio
3. O accede directamente a: `https://TU-USUARIO.github.io/CreaConstruye-Digital-Garden`

## ✅ ¡Listo!

Tu Digital Garden está en línea.

## Próximos Pasos

### Actualizar contenido desde Obsidian

Cuando hagas cambios en tu vault de Obsidian:

```bash
# 1. Copiar cambios
cp -r /storage/emulated/0/Documents/CreaConstruye_vault/* ~/CreaConstruye-Digital-Garden/content/

# 2. Commit
cd ~/CreaConstruye-Digital-Garden
git add .
git commit -m "Update content from Obsidian"

# 3. Push
git push origin main
```

Tu sitio se actualizará automáticamente en 2-3 minutos.

### Personalizar el sitio

#### Cambiar el título y descripción
Edita `config.yml`:
```bash
nano config.yml
```

Cambia:
```yaml
title: Tu Nuevo Título
description: Tu nueva descripción
```

#### Cambiar el tema
En `config.yml`, busca `theme:` y cámbialo a:
- `jekyll-theme-minimal` (actual)
- `jekyll-theme-slate`
- `jekyll-theme-architect`
- `jekyll-theme-cayman`
- [Más temas](https://pages.github.com/themes/)

### Ver tu sitio en línea

- **Sitio principal**: `https://TU-USUARIO.github.io/CreaConstruye-Digital-Garden`
- **Editar página principal**: Edita `index.md`
- **Feed RSS**: `https://TU-USUARIO.github.io/CreaConstruye-Digital-Garden/feed.xml`

## 🆘 Ayuda

### "Permission denied" al hacer push
Usa SSH en lugar de HTTPS:
```bash
git remote set-url origin git@github.com:TU-USUARIO/CreaConstruye-Digital-Garden.git
```

### El sitio no se publica
1. Revisa que la rama sea **main** (no master)
2. Ve a **Settings** → **Pages** y verifica que esté habilitado
3. En **Actions**, busca errores de construcción
4. Revisa que `config.yml` sea válido

### Los Markdown no se ven bien
Asegúrate de que comiencen con:
```yaml
---
title: Mi Artículo
layout: post
---
```

---

**¿Preguntas?** Revisa el README.md o consulta la [documentación de GitHub Pages](https://pages.github.com/).
