---
layout: category
title: 🛠️ Herramientas
description: Stack de herramientas especializadas para análisis y gestión
---

## Herramientas Disponibles

{% assign tools = site.pages | where_exp: "tool", "tool.path contains '04-Herramientas'" | sort: "title" %}

<div class="posts-list">

{% if tools.size > 1 %}
  {% for tool in tools %}
    {% if tool.name != "index.md" and tool.name != "README.md" %}
    <div class="post-card">
      <h3><a href="{{ tool.url | relative_url }}">{{ tool.title | default: tool.name }}</a></h3>
      <div class="post-meta">
        <span>🔧 {{ tool.name }}</span>
      </div>
      <div class="post-excerpt">
        <p>Herramienta para análisis y evaluación especializada en el sector inmobiliario.</p>
      </div>
      <a href="{{ tool.url | relative_url }}" class="read-more">Ver detalles →</a>
    </div>
    {% endif %}
  {% endfor %}
{% else %}
  <div class="post-card">
    <h3>Herramientas en Construcción</h3>
    <div class="post-excerpt">
      <p>Las herramientas especializadas aparecerán aquí conforme se desarrollen y agreguen al vault.</p>
    </div>
  </div>
{% endif %}

</div>

## Categorías de Herramientas

- **Análisis de Terrenos**: Evaluación de ubicación, accesibilidad y potencial
- **Costos de Construcción**: Presupuestos y estimaciones
- **Análisis de Mercado**: Tendencias y comparables
- **Proyecciones Financieras**: ROI y flujos de caja
- **Zonificación**: Regulaciones y restricciones
- **Cálculo de ROI**: Retorno sobre inversión
- **Estimación de Tiempos**: Cronogramas de proyecto
- **Análisis de Riesgos**: Identificación y mitigación

---

*Última actualización: {{ site.time | date: "%d de %B de %Y" }}*
