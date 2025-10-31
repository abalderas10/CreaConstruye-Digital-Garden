# 🌱 Cómo Actualizar tu Digital Garden

Tu Digital Garden está completamente configurado y listo para publicar. Aquí te muestro cómo mantenerlo actualizado.

## 📱 Flujo de Trabajo

### 1. Editar en Obsidian

Haz todos los cambios que quieras en tu vault de Obsidian (`CreaConstruye_vault`):
- Edita artículos existentes
- Crea nuevos artículos en `01-Blog/`
- Agrega recursos en `03-Recursos/`
- Actualiza herramientas
- Desarrolla ideas

### 2. Sincronizar con el Digital Garden

Cuando termines tus cambios, ejecuta estos comandos en Termux:

```bash
# Navega a la carpeta del Digital Garden
cd ~/CreaConstruye-Digital-Garden

# Copia los cambios desde Obsidian
cp -r /storage/emulated/0/Documents/CreaConstruye_vault/* content/

# Verifica los cambios
git status

# Agrega todos los cambios
git add .

# Crea un commit
git commit -m "Actualizar contenido desde Obsidian"

# Sube a GitHub
git push origin main
```

### 3. Verificar en línea

Tu sitio se actualizará automáticamente en 1-2 minutos. Verifica en:
```
https://abalderas10.github.io/CreaConstruye-Digital-Garden
```

## 🚀 Script Automático (Opcional)

Para hacer esto más fácil, puedes crear un script que haga todo automáticamente:

```bash
# Crear el script
cat > ~/update-garden.sh << 'EOF'
#!/bin/bash
cd ~/CreaConstruye-Digital-Garden
echo "📋 Sincronizando contenido..."
cp -r /storage/emulated/0/Documents/CreaConstruye_vault/* content/
echo "✅ Contenido sincronizado"
echo "🔄 Preparando cambios..."
git add .
echo "💾 Guardando cambios..."
git commit -m "Actualizar contenido desde Obsidian - $(date '+%d/%m/%Y %H:%M')"
echo "📤 Subiendo a GitHub..."
git push origin main
echo "✅ ¡Digital Garden actualizado!"
echo "🌐 Sitio: https://abalderas10.github.io/CreaConstruye-Digital-Garden"
EOF

# Hacer el script ejecutable
chmod +x ~/update-garden.sh

# Ejecutarlo
bash ~/update-garden.sh
```

## 📁 Estructura de Carpetas

Tu contenido se organiza así:

```
content/
├── 01-Blog/
│   └── Articulos/
│       ├── 2024-democratizando-desarrollo...
│       └── 2025-ia-transformando-evaluacion...
├── 02-Proyectos/
├── 03-Recursos/
├── 04-Herramientas/
│   ├── 01-Analisis-Terrenos/
│   ├── 02-Costos-Construccion/
│   ├── 03-Analisis-Mercado/
│   ├── 04-Proyecciones-Financieras/
│   ├── 05-Analisis-Zonificacion/
│   ├── 06-Calculo-ROI/
│   ├── 07-Estimacion-Tiempos/
│   └── 08-Analisis-Riesgos/
├── 05-Templates/
└── 06-Ideas/
```

## 🎨 Personalización

### Cambiar Colores

Edita `_layouts/default.html` y busca la sección `:root`:

```css
:root {
    --primary: #10b981;        /* Verde principal */
    --primary-dark: #059669;    /* Verde oscuro */
    --accent: #06b6d4;          /* Azul acento */
    --text: #1f2937;            /* Texto oscuro */
    --text-light: #6b7280;      /* Texto ligero */
    --bg: #f9fafb;              /* Fondo claro */
}
```

### Cambiar Título y Descripción

Edita `config.yml`:

```yaml
title: Tu Nuevo Título
description: Tu nueva descripción
```

## 📊 Estadísticas del Sitio

Tu Digital Garden incluye:
- ✅ 6 categorías principales
- ✅ Página de búsqueda funcional
- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Animaciones suaves
- ✅ Navegación sticky
- ✅ Footer informativo

## 🔗 Enlaces Importantes

- **Sitio publicado**: https://abalderas10.github.io/CreaConstruye-Digital-Garden
- **Repositorio**: https://github.com/abalderas10/CreaConstruye-Digital-Garden
- **Página de búsqueda**: https://abalderas10.github.io/CreaConstruye-Digital-Garden/search.html

## 🆘 Solución de Problemas

### El sitio no se actualiza

1. Verifica que hiciste push correctamente: `git push origin main`
2. Espera 2-3 minutos
3. Limpia la caché del navegador (Ctrl + Shift + Supr)
4. Verifica el status en: `https://github.com/abalderas10/CreaConstruye-Digital-Garden/actions`

### Los cambios no se ven

```bash
# Verifica el último commit
cd ~/CreaConstruye-Digital-Garden
git log -1

# Si no hay cambios, añade y commit manualmente
git add .
git commit -m "Cambios manuales"
git push origin main
```

### Quiero deshacer cambios

```bash
# Ver el historial
git log --oneline

# Volver a un commit anterior
git reset --hard <commit-hash>
git push origin main --force
```

## 💡 Consejos

1. **Mantén los archivos organizados**: Usa las carpetas propuestas
2. **Escribe buen Markdown**: Facilita la lectura en el sitio
3. **Usa enlaces internos**: `[Título]({{ site.baseurl }}/ruta)`
4. **Haz commits frecuentes**: Para mantener el historio limpio
5. **Prueba localmente**: Antes de publicar cambios importantes

## 🎯 Próximos Pasos Sugeridos

- [ ] Completar la información de categorías
- [ ] Escribir el primer artículo en el Blog
- [ ] Documentar tus herramientas principales
- [ ] Compartir el enlace con tu comunidad
- [ ] Configurar notificaciones de actualizaciones

---

**¿Preguntas o problemas?** Consulta el README.md o revisa la documentación de Jekyll: https://jekyllrb.com/docs/

¡Tu Digital Garden está listo para crecer! 🌱
