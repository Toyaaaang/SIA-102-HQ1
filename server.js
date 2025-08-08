const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Under Maintenance</title>
            <style>
                body {
                    background: #f8fafc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background: #c9c9c9ff;
                    border-radius: 0.75rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 1.07);
                    padding: 2rem 3rem;
                    text-align: center;
                    font-family: 'Inter', sans-serif;
                    margin: 20px;
                }
                .card h1 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
                .card p {
                    color: #64748b;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🚧 Under Maintenance</h1>
                <p>Our site is currently under maintenance.<br/>Please check back later.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

