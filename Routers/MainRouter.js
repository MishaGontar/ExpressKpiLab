import express from "express";

const mainRouter = new express

mainRouter.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
<div align="center">
<h1>Lab 1</h1>
</div>
<h3>Завдання:</h3>
<ul>
 <li>Створення користувача (method:POST /user)</li>
 <li>Створення категорії витрат  (method:POST /category)</li>
 <li>Створення запису про витрати (method:POST /note)</li>
 <li>Отримання списку категорій (method:GET /category)</li>
 <li>Отримання списку записів по певному користувачу (method:GET /note/:user_id)</li>
 <li>Отримання списку записів в категорії для певного користувача (method:GET /note/:user_id/:category_id)</li>
</ul>
`)
})

export default mainRouter