# CreaConstruye Digital Garden

Sitio web generado automáticamente desde tu vault de Obsidian usando Jekyll y GitHub Pages.

## 🚀 Primeros Pasos

### 1. Inicializar Git
```bash
cd CreaConstruye-Digital-Garden
git init
git add .
git commit -m "Initial commit: Digital Garden setup"
```

### 2. Crear el repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en **New Repository**
3. Nombra el repositorio: `CreaConstruye-Digital-Garden`
4. Haz el repositorio **público**
5. NO inicialices con README, .gitignore o licencia (ya los tenemos)

### 3. Conectar tu repositorio local con GitHub
```bash
git remote add origin https://github.com/TU-USUARIO/CreaConstruye-Digital-Garden.git
git branch -M main
git push -u origin main
```

### 4. Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** → **Pages**
3. Bajo "Source", selecciona **main** y **/ (root)**
4. Haz clic en **Save**

Tu sitio estará disponible en: `https://tu-usuario.github.io/CreaConstruye-Digital-Garden`

## 📝 Estructura de Carpetas

```
CreaConstruye-Digital-Garden/
├── content/              # Tu contenido de Obsidian
│   ├── 01-Blog/
│   ├── 02-Proyectos/
│   ├── 03-Recursos/
│   └── ...
├── _layouts/            # Plantillas Jekyll
├── _includes/           # Componentes reutilizables
├── assets/              # CSS, JS, imágenes
├── config.yml           # Configuración del sitio
├── index.md             # Página principal
└── _config.yml          # Configuración de Jekyll (si usas Jekyll)
```

## 🔧 Configuración

Edita `config.yml` para personalizar:
- `title`: Título del sitio
- `description`: Descripción
- `url`: URL de tu sitio
- `author`: Tu nombre

## 📤 Actualizar contenido

Cada vez que actualices tu vault:
```bash
# Copiar cambios desde Obsidian
cp -r /ruta/a/vault/content/* content/

# Commit y push
git add .
git commit -m "Update content"
git push origin main
```

## 🎨 Personalización

### Tema
Actualmente usa `jekyll-theme-minimal`. Para cambiar:
1. Edita `config.yml`
2. Cambia la línea `theme: jekyll-theme-minimal` a otro tema disponible
3. Push los cambios

### Plugins Recomendados
- `jekyll-feed`: RSS feed
- `jekyll-seo-tag`: SEO mejorado
- `jekyll-sitemap`: Mapa del sitio

## 🐛 Solución de Problemas

### El sitio no se publica
- Verifica que el repositorio sea **público**
- Revisa la sección **Actions** en GitHub para ver errores de build
- Espera 2-3 minutos después de hacer push

### Los archivos Markdown no se ven bien
- Asegúrate de tener encabezados YAML al inicio:
  ```yaml
  ---
  title: Mi Artículo
  ---
  # Contenido aquí
  ```

### Enlaces internos no funcionan
- En Obsidian usa `[[Nombre]]`
- Para GitHub Pages, usa `[Nombre]({{ site.baseurl }}/path-to-file)`

## 📚 Recursos

- [Jekyll Documentation](https://jekyllrb.com/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Nota**: Los archivos `.obsidian` se ignoran automáticamente en Git.
