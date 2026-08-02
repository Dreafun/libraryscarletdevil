# Библиотека алой дьяволицы

Сайт-библиотека на базе **Sphinx**, **PyData Sphinx Theme** и **Read the Docs**.

## Что уже настроено

- тёмная тема по умолчанию;
- шрифт Tahoma с безопасными системными заменами;
- раскрывающиеся полки и вложенные полки в левом меню;
- навигация по заголовкам текущей статьи в правом меню;
- главная страница с приветствием и переходом к пользовательскому гайду;
- шаблон статьи и инструкция по публикации новых материалов.

## Структура

```text
.
├── .readthedocs.yaml
├── docs/
│   ├── conf.py
│   ├── index.rst
│   ├── guide.rst
│   ├── requirements.txt
│   ├── articles/
│   │   ├── index.rst
│   │   ├── start.rst
│   │   ├── template.rst
│   │   └── guides/
│   │       ├── index.rst
│   │       └── add-article.rst
│   └── _static/
│       └── custom.css
└── .gitignore
```

## Как добавить статью

1. Скопируй `docs/articles/template.rst`.
2. Переименуй копию латиницей, например `new-article.rst`.
3. Напиши статью.
4. Добавь `new-article` в `toctree` файла нужной полки.
5. Отправь изменения в GitHub и дождись сборки Read the Docs.

Подробная инструкция находится в `docs/articles/guides/add-article.rst`.

## Локальная сборка

```bash
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows

pip install -r docs/requirements.txt
sphinx-build -b html docs docs/_build/html
```

Готовый сайт появится в `docs/_build/html/`.
