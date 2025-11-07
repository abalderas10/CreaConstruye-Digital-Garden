---
layout: default
title: 🛠️ Herramientas - Proforma Inmobiliaria
description: Suite integral de análisis para proyectos inmobiliarios
---

# > Proforma Inmobiliaria

Sistema integrado de herramientas para análisis, evaluación y gestión completa de proyectos inmobiliarios.

## 📊 Visualización General

<div id="tools-graph" style="margin: 40px 0; text-align: center;">
    <svg viewBox="0 0 1000 600" style="width: 100%; height: auto; background: #161b22; border: 1px solid #30363d;">
        <!-- Central Hub -->
        <circle cx="500" cy="300" r="60" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="2"/>
        <text x="500" y="305" text-anchor="middle" fill="#a7f3d0" font-size="16" font-weight="bold">PROFORMA</text>

        <!-- Tool 1: Análisis de Terrenos -->
        <circle cx="150" cy="100" r="40" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="2"/>
        <text x="150" y="105" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="bold">TERRENOS</text>
        <line x1="500" y1="300" x2="150" y2="100" stroke="#ef4444" stroke-width="2" opacity="0.5"/>

        <!-- Tool 2: Costos Construcción -->
        <circle cx="350" cy="80" r="40" fill="#f97316" opacity="0.2" stroke="#f97316" stroke-width="2"/>
        <text x="350" y="85" text-anchor="middle" fill="#fed7aa" font-size="12" font-weight="bold">COSTOS</text>
        <line x1="500" y1="300" x2="350" y2="80" stroke="#f97316" stroke-width="2" opacity="0.5"/>

        <!-- Tool 3: Análisis Mercado -->
        <circle cx="650" cy="80" r="40" fill="#eab308" opacity="0.2" stroke="#eab308" stroke-width="2"/>
        <text x="650" y="85" text-anchor="middle" fill="#fef08a" font-size="12" font-weight="bold">MERCADO</text>
        <line x1="500" y1="300" x2="650" y2="80" stroke="#eab308" stroke-width="2" opacity="0.5"/>

        <!-- Tool 4: Proyecciones Financieras -->
        <circle cx="850" cy="100" r="40" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" stroke-width="2"/>
        <text x="850" y="105" text-anchor="middle" fill="#a5f3fc" font-size="12" font-weight="bold">FINANZAS</text>
        <line x1="500" y1="300" x2="850" y2="100" stroke="#06b6d4" stroke-width="2" opacity="0.5"/>

        <!-- Tool 5: Zonificación -->
        <circle cx="850" cy="500" r="40" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
        <text x="850" y="505" text-anchor="middle" fill="#ddd6fe" font-size="12" font-weight="bold">ZONAS</text>
        <line x1="500" y1="300" x2="850" y2="500" stroke="#8b5cf6" stroke-width="2" opacity="0.5"/>

        <!-- Tool 6: ROI -->
        <circle cx="650" cy="520" r="40" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/>
        <text x="650" y="525" text-anchor="middle" fill="#fbcfe8" font-size="12" font-weight="bold">ROI</text>
        <line x1="500" y1="300" x2="650" y2="520" stroke="#ec4899" stroke-width="2" opacity="0.5"/>

        <!-- Tool 7: Tiempos -->
        <circle cx="350" cy="520" r="40" fill="#14b8a6" opacity="0.2" stroke="#14b8a6" stroke-width="2"/>
        <text x="350" y="525" text-anchor="middle" fill="#99f6e4" font-size="12" font-weight="bold">TIEMPOS</text>
        <line x1="500" y1="300" x2="350" y2="520" stroke="#14b8a6" stroke-width="2" opacity="0.5"/>

        <!-- Tool 8: Riesgos -->
        <circle cx="150" cy="500" r="40" fill="#f43f5e" opacity="0.2" stroke="#f43f5e" stroke-width="2"/>
        <text x="150" y="505" text-anchor="middle" fill="#fce7f3" font-size="12" font-weight="bold">RIESGOS</text>
        <line x1="500" y1="300" x2="150" y2="500" stroke="#f43f5e" stroke-width="2" opacity="0.5"/>

        <!-- Interconexiones entre herramientas -->
        <line x1="150" y1="100" x2="350" y2="80" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
        <line x1="350" y1="80" x2="650" y2="80" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
        <line x1="650" y1="80" x2="850" y2="100" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
        <line x1="850" y1="100" x2="850" y2="500" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
        <line x1="850" y1="500" x2="650" y2="520" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
        <line x1="650" y1="520" x2="350" y2="520" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
        <line x1="350" y1="520" x2="150" y2="500" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
        <line x1="150" y1="500" x2="150" y2="100" stroke="#30363d" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/>
    </svg>
</div>

<div style="text-align: center; color: #b0b0b0; font-size: 0.9em; margin-top: -20px;">
  ↑ Cada herramienta se conecta con otras para un análisis integral
</div>

---

## 🔧 Herramientas Disponibles

<div class="tools-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin: 30px 0;">

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #ef4444; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/01-Analisis-Terrenos/'">
    <div style="color: #fca5a5; font-size: 2em; margin-bottom: 10px;">📍</div>
    <h3 style="color: #ef4444; margin: 0 0 10px 0;">Análisis de Terrenos</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Evaluación de ubicación, accesibilidad y potencial del terreno.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #ef4444; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #f97316; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/02-Costos-Construccion/'">
    <div style="color: #fed7aa; font-size: 2em; margin-bottom: 10px;">💰</div>
    <h3 style="color: #f97316; margin: 0 0 10px 0;">Costos de Construcción</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Presupuestos, costos unitarios y estimaciones.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #f97316; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #eab308; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/03-Analisis-Mercado/'">
    <div style="color: #fef08a; font-size: 2em; margin-bottom: 10px;">📊</div>
    <h3 style="color: #eab308; margin: 0 0 10px 0;">Análisis de Mercado</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Tendencias, comparables y estrategia de posicionamiento.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #eab308; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #06b6d4; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/04-Proyecciones-Financieras/'">
    <div style="color: #a5f3fc; font-size: 2em; margin-bottom: 10px;">📈</div>
    <h3 style="color: #06b6d4; margin: 0 0 10px 0;">Proyecciones Financieras</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Flujos de caja, VAN, TIR y análisis financiero.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #06b6d4; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #8b5cf6; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/05-Analisis-Zonificacion/'">
    <div style="color: #ddd6fe; font-size: 2em; margin-bottom: 10px;">🏗️</div>
    <h3 style="color: #8b5cf6; margin: 0 0 10px 0;">Análisis de Zonificación</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Normativas, restricciones y factibilidad legal.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #8b5cf6; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #ec4899; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/06-Calculo-ROI/'">
    <div style="color: #fbcfe8; font-size: 2em; margin-bottom: 10px;">💎</div>
    <h3 style="color: #ec4899; margin: 0 0 10px 0;">Cálculo de ROI</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Retorno sobre inversión y métricas de rentabilidad.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #ec4899; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #14b8a6; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/07-Estimacion-Tiempos/'">
    <div style="color: #99f6e4; font-size: 2em; margin-bottom: 10px;">⏱️</div>
    <h3 style="color: #14b8a6; margin: 0 0 10px 0;">Estimación de Tiempos</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Cronogramas, hitos y gestión de proyecto.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #14b8a6; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

  <div class="tool-card" style="background: #161b22; border: 1px solid #30363d; border-left: 4px solid #f43f5e; padding: 25px; cursor: pointer;" onclick="window.location.href='{{ site.baseurl }}/content/04-Herramientas/08-Analisis-Riesgos/'">
    <div style="color: #fce7f3; font-size: 2em; margin-bottom: 10px;">⚠️</div>
    <h3 style="color: #f43f5e; margin: 0 0 10px 0;">Análisis de Riesgos</h3>
    <p style="color: #b0b0b0; margin: 0; font-size: 0.9em;">Identificación, evaluación y mitigación de riesgos.</p>
    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #30363d;">
      <span style="display: inline-block; background: #f43f5e; color: #0d1117; padding: 4px 10px; font-size: 0.8em; font-weight: bold;">→ VER</span>
    </div>
  </div>

</div>

---

## 🎯 Cómo Usar la Proforma

1. **Inicio**: Comienza con **Análisis de Terrenos** para evaluar la viabilidad del sitio
2. **Factibilidad**: Valida **Zonificación** y restricciones legales
3. **Costos**: Define **Costos de Construcción** y presupuesto base
4. **Mercado**: Analiza el **Análisis de Mercado** para estrategia comercial
5. **Finanzas**: Proyecta **Proyecciones Financieras** y flujos de caja
6. **ROI**: Calcula **ROI** y métricas de rentabilidad
7. **Cronograma**: Estima **Tiempos** y hitos del proyecto
8. **Riesgos**: Identifica y mitiga **Riesgos** potenciales

---

## 💡 Integración de Herramientas

Cada herramienta puede funcionar independientemente, pero su potencial máximo se alcanza cuando se integran:

```
Terrenos → Zonificación → Costos → Mercado → Finanzas → ROI → Tiempos → Riesgos
  ↓           ↓            ↓        ↓         ↓        ↓      ↓        ↓
Análisis    Factibilidad  Budget  Precios  Flujos  Rentable Schedule Mitigación
```

*Última actualización: {{ site.time | date: "%d de %B de %Y" }}*
