# Configuration file for the Sphinx documentation builder.

from __future__ import annotations

project = "Библиотека алой дьяволицы"
author = "Dreafun"
copyright = "2026, Dreafun"
release = "0.2.1"

language = "ru"
root_doc = "index"

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

autosectionlabel_prefix_document = True
todo_include_todos = True

html_theme = "pydata_sphinx_theme"
html_title = "Библиотека алой дьяволицы"
html_short_title = "Алая библиотека"

html_static_path = ["_static"]
html_css_files = ["custom.css"]

# PyData Sphinx Theme получает режим по умолчанию через контекст шаблонов.
html_context = {
    "default_mode": "dark",
}

html_theme_options = {
    # В левом меню открыта только верхняя полка, остальные раскрываются по клику.
    "show_nav_level": 1,
    "navigation_depth": 6,
    "collapse_navigation": True,
    # Справа показывается навигация по заголовкам текущей статьи.
    "show_toc_level": 3,
    "secondary_sidebar_items": ["page-toc"],
    "navbar_align": "left",
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/Dreafun/libraryscarletdevil",
            "icon": "fa-brands fa-github",
        },
    ],
}
