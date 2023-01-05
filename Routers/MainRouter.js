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

<div align="center">
<h1>Lab 2</h1>
</div>
<h3>Зроблено:</h3>
<ul>
 <li>Створено валюта для користувачів (user) та витрат (note)</li>
 <li>Також було додано ORM та валідація даних</li>
 <li>Отримання списку користувачів (method:GET /users)</li>
 <li>Отримання списку валют (method:GET /currencies)</li>
 <li>Створення валюти (method:POST /currency)</li>
</ul>

<div align="center">
<h1>Lab 3</h1>
</div>
<h3>Зроблено:</h3>
<ul>
 <li>Додано аутентифікацію для користувача (method:GET /auth/user)</li>
 <li>Виправлені недоліки з користувачем та бд.</li>
 <li>Була додана додаткова валідація для користувача</li>
 <li>Додано JWT токен</li>
 <li>Користувач може ходити на сторінки без JWT :
  Створення користувача (method:POST /user) , аутентифікації (method:GET /auth/user) також на головну на якій ми зараз)</li>
</ul>

</div>`)
})

export default mainRouter