'use strict';

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(
    `<!DECOTYPE html><thml lang="ja">
      <body>
        <h1>ログアウトしました</h1>
        <a href="/posts">ログイン</a>
      </body>
    </html>`
  );
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のメソッドです');
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest
};