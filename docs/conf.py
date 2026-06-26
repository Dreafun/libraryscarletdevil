# Configuration file for the Sphinx documentation builder.

from __future__ import annotations

project = "Library Scarlet Devil"
author = "Dreafun"
copyright = "2026, Dreafun"
release = "0.1.0"

language = "ru"

extensions = [
    "myst_parser",
    "sphinx.ext.todo",
    "sphinx.ext.autosectionlabel",
    "sphinx_copybutton",
]

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

source_suffix = {
    ".rst": "restructuredtext",
    ".md": "markdown",
}

# Чтобы одинаковые заголовки в разных файлах не конфликтовали.
autosectionlabel_prefix_document = True

# Показывать блоки todo в собранной документации.
todo_include_todos = True

html_theme = "pydata_sphinx_theme"
html_title = "Library Scarlet Devil"
html_short_title = "Scarlet Library"

html_static_path = ["_static"]
html_css_files = ["custom.css"]

html_theme_options = {
    "show_toc_level": 2,
    "navigation_depth": 4,
    "collapse_navigation": False,
    "navbar_align": "left",
    "secondary_sidebar_items": ["page-toc", "sourcelink"],
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/Dreafun/libraryscarletdevil",
            "icon": "fa-brands fa-github",
        },
    ],
}
