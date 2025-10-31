---
layout: category
title: 📝 Blog
description: Artículos profundos sobre desarrollo inmobiliario, IA y tecnología
---

## Artículos Recientes

<div class="posts-list">

{% assign posts = site.pages | where_exp: "post", "post.path contains '01-Blog'" | sort: "date" | reverse %}

{% if posts.size > 0 %}
  {% for post in posts %}
    {% if post.name != "index.md" and post.name != "README.md" %}
    <div class="post-card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title | default: post.name }}</a></h3>
      <div class="post-meta">
        <span>📅 {{ post.date | default: "Sin fecha" | date: "%d/%m/%Y" }}</span>
        <span>⏱️ Lectura: ~5 min</span>
      </div>
      <div class="post-excerpt">
        <p>{{ post.content | strip_html | truncatewords: 50 }}</p>
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Leer más →</a>
    </div>
    {% endif %}
  {% endfor %}
{% else %}
  <div class="empty-state">
    <h3>No hay artículos aún</h3>
    <p>Los artículos aparecerán aquí conforme se agreguen al vault.</p>
  </div>
{% endif %}

</div>

## Sobre esta Sección

En esta sección comparto artículos profundos sobre:
- 🏗️ **Desarrollo Inmobiliario**: Análisis de mercado, tendencias y oportunidades
- 🤖 **Inteligencia Artificial**: Aplicaciones prácticas en el sector inmobiliario
- 💻 **Tecnología**: Herramientas y marcos de trabajo para innovación
- 📊 **Análisis de Datos**: Estrategias para tomar decisiones basadas en datos

---

*Última actualización: {{ site.time | date: "%d de %B de %Y" }}*
