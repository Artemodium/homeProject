1) При загрузке приложения, скачиваются курсы валют http://data.fixer.io/api/latest?access_key=(ваш токен) - курсы валюты
2) На экране появляется кнопка с выпадающим списком, в списке указанны полные названия валют, а не их сокращения http://data.fixer.io/api/symbols?access_key=(ваш токен)
3) При выборе валюты на основном экране отображается ее флаг, название и курс валюты
http://country.io/currency.json - лист валют к стране
https://flagpedia.net/download/api флаги стран
Задание должно быть выполнено в соответствии с парадигмой компонентно-ориентированного программирования.
Сборочный скрипт должен собирать упакованное приложение под Electron.

Запуск проекта для разработки производится двумя командами:
    npm start
    npm run electron-dev
