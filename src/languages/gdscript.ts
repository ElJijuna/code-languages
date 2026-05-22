import type { Language } from "../types";

export const gdscript = {
  slug: "gdscript",
  publishedDate: "2014-12-15",
  extensions: [".gd"],
  author: "Juan Linietsky, Ariel Manzur / Godot contributors",
  website: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/",
  paradigms: ["object-oriented", "imperative", "event-driven", "scripting"],
  tooling: {
    runtimes: ["Godot Engine"],
    packageManagers: ["Godot Asset Library"],
    ecosystems: ["Game Development", "2D Games", "3D Games"],
  },
  version: "4.6",
  logo: "https://cdn.simpleicons.org/godotengine/478CBF",
  color: "#478CBF",
  i18n: {
    en: {
      name: "GDScript",
      description: "Godot Engine's integrated scripting language for gameplay and editor logic.",
      longDescription:
        "GDScript is a high-level scripting language built for Godot Engine. It uses indentation-based syntax, dynamic and optional static typing, signals, scene-node integration, coroutines, resources, and editor-aware tooling tailored to game development.\n\nIt is used to implement gameplay, UI behavior, tools, animation logic, prototypes, editor plugins, and scripts that interact closely with Godot scenes and engine APIs.",
    },
    es: {
      name: "GDScript",
      description:
        "El lenguaje de scripting integrado de Godot Engine para gameplay y logica de editor.",
      longDescription:
        "GDScript es un lenguaje de scripting de alto nivel creado para Godot Engine. Usa sintaxis basada en indentacion, tipado dinamico y estatico opcional, senales, integracion con nodos de escena, corrutinas, recursos y tooling del editor orientado al desarrollo de juegos.\n\nSe usa para implementar gameplay, comportamiento de UI, herramientas, logica de animacion, prototipos, plugins del editor y scripts que interactuan de cerca con escenas y APIs de Godot.",
    },
  },
} satisfies Language;
