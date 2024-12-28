from flask import Flask, jsonify, render_template
import sqlite3

app = Flask(__name__)

# Function to get the latest 7 news articles
def get_latest_news():
    conn = sqlite3.connect('news.db')
    cursor = conn.cursor()
    cursor.execute('''
        SELECT date, url, title FROM news
        ORDER BY date DESC
        LIMIT 7
    ''')
    rows = cursor.fetchall()
    conn.close()
    return [{'date': row[0], 'url': row[1], 'title': row[2]} for row in rows]

# Route to fetch news data
@app.route('/api/news')
def api_news():
    return jsonify(get_latest_news())

# Route for the main page
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

