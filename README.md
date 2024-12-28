# osoi.news (遅いニュース)

## Development

- Requirements: SQLite, uv (for Python package management), Flask (installed via `uv pip install`)

Start local server:
```zsh
source .venv/bin/activate
```

```zsh
python3 app.py
```

Stop virtual environment:
```zsh
deactivate
```

Inserting data:
```zsh
sqlite3 news.db
```

```SQL
INSERT INTO news (date, url, title) VALUES
('2024-12-28', 'https://www3.nhk.or.jp/news/html/20241228/k10014104381000.html', 'Japan GDP Growth at Record High'),
('2024-12-27', 'https://www.reuters.com/world/asia-pacific/tokyo-stocks-surge-20241227.html', 'Tokyo Stock Market Surges');
-- Add more entries as needed
```
