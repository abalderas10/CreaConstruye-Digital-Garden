import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🏗️ CreaConstruye - Plataforma Inmobiliaria",
    tagDescription: new Map([
      ["proforma", "Ingeniería de Proforma Inmobiliaria"],
      ["naucalpan", "Proyecto Naucalpan - Análisis y Plan"],
      ["tramites", "Trámites Municipales"],
      ["construccion", "Fase de Construcción"],
      ["mercado", "Análisis de Mercado"],
      ["finanzas", "Análisis Financiero"],
      ["herramientas", "Herramientas de Análisis"],
      ["templates", "Plantillas Administrativas"],
      ["fase1", "Evaluación Pre-Compra"],
      ["tareas", "Lista de Tareas"],
    ]),
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.XHTML(),
      Plugin.Feed({
        outputTypes: ["json", "xml"],
        rssFullHtml: true,
      }),
    ],
  },
}

export default config
