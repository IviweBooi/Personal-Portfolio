<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>Sitemap - Iviwe Booi Portfolio</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        margin: 0;
                        padding: 40px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                        color: #333;
                    }
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                        overflow: hidden;
                    }
                    .header {
                        background: #2c3e50;
                        color: white;
                        padding: 30px;
                        text-align: center;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 2.5em;
                        font-weight: 300;
                    }
                    .header p {
                        margin: 10px 0 0 0;
                        opacity: 0.8;
                        font-size: 1.1em;
                    }
                    .content {
                        padding: 30px;
                    }
                    .url-item {
                        background: #f8f9fa;
                        border-left: 4px solid #667eea;
                        margin: 20px 0;
                        padding: 20px;
                        border-radius: 0 8px 8px 0;
                        transition: all 0.3s ease;
                    }
                    .url-item:hover {
                        background: #e9ecef;
                        transform: translateX(5px);
                    }
                    .url-link {
                        font-size: 1.2em;
                        font-weight: 600;
                        color: #2c3e50;
                        text-decoration: none;
                        display: block;
                        margin-bottom: 10px;
                    }
                    .url-link:hover {
                        color: #667eea;
                    }
                    .url-meta {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 15px;
                        font-size: 0.9em;
                        color: #6c757d;
                    }
                    .meta-item {
                        display: flex;
                        align-items: center;
                    }
                    .meta-label {
                        font-weight: 600;
                        margin-right: 8px;
                    }
                    .priority-bar {
                        width: 100px;
                        height: 6px;
                        background: #e9ecef;
                        border-radius: 3px;
                        overflow: hidden;
                        margin-left: 8px;
                    }
                    .priority-fill {
                        height: 100%;
                        background: linear-gradient(90deg, #28a745, #ffc107, #dc3545);
                        border-radius: 3px;
                    }
                    .stats {
                        background: #f8f9fa;
                        padding: 20px;
                        text-align: center;
                        border-top: 1px solid #dee2e6;
                        color: #6c757d;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🗺️ Sitemap</h1>
                        <p>Iviwe Booi - Full Stack Developer Portfolio</p>
                    </div>
                    <div class="content">
                        <xsl:for-each select="sitemap:urlset/sitemap:url">
                            <div class="url-item">
                                <a class="url-link" href="{sitemap:loc}">
                                    <xsl:value-of select="sitemap:loc"/>
                                </a>
                                <div class="url-meta">
                                    <div class="meta-item">
                                        <span class="meta-label">📅 Last Modified:</span>
                                        <span><xsl:value-of select="sitemap:lastmod"/></span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-label">🔄 Change Frequency:</span>
                                        <span><xsl:value-of select="sitemap:changefreq"/></span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-label">⭐ Priority:</span>
                                        <span><xsl:value-of select="sitemap:priority"/></span>
                                        <div class="priority-bar">
                                            <div class="priority-fill" style="width: {sitemap:priority * 100}%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </xsl:for-each>
                    </div>
                    <div class="stats">
                        <p>Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></p>
                        <p>Generated for search engines to efficiently crawl and index this website.</p>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>