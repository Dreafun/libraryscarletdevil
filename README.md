# Library Scarlet Devil

Библиотека статей на базе **Sphinx** и **Read the Docs**.

Здесь можно хранить заметки, гайды, лорные материалы, технические статьи и любые другие тексты в формате документации.

## Структура

```text
.
├── .readthedocs.yaml          # конфигурация сборки Read the Docs
├── docs/
│   ├── conf.py                # конфигурация Sphinx
│   ├── index.rst              # главная страница документации
│   ├── requirements.txt       # зависимости для сборки
│   ├── articles/
│   │   ├── index.rst          # раздел статей
│   │   ├── start.rst          # первая тестовая статья
│   │   └── template.rst       # шаблон новой статьи
│   └── _static/
│       └── custom.css         # кастомные стили
└── .gitignore
```

## Как добавить статью

1. Создай новый файл в папке `docs/articles/`, например:

   ```text
   docs/articles/my-new-article.rst
   ```

2. Добавь его в список `toctree` внутри файла:

   ```text
   docs/articles/index.rst
   ```

3. Напиши статью в формате reStructuredText.

## Локальная сборка

```bash
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows

pip install -r docs/requirements.txt
sphinx-build -b html docs docs/_build/html
```

После сборки открой:

```text
docs/_build/html/index.html
```

## Read the Docs

Read the Docs будет использовать `.readthedocs.yaml` и собирать документацию из папки `docs/`.
