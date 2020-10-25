<p align="center">
  <img src="https://media.discordapp.net/attachments/732211790804680814/769927661438107660/12.png">
  <br>
</p>

Привет, да-да, это снова я с очередным гавна кодом но теперь на **TypeScript**. Данный код поможет вам получать уведомления когда вам донатят на [donationalerts](https://donationalerts.com).


**❤️ Заранее огромное спасибо хочу сказать [MrVaDiM4iK#0232](https://github.com/MrVaDiM4iK/)**


# ⚒ Настройка конфига:
И так, давайте разберемся по порядку. Открываем файл **config.ts** и видим первые три строчки
```
    "socket": "wss://socket.donationalerts.ru",
    "socket-port": "443",
    "type": "minor",
```
> ИХ НАМ ТРОГАТЬ НЕ НАДО!

<br><br>

Затем идут еще две строчки:
```
    "donation-token": "",
    "pick": "https://cdn.discordapp.com/attachments/732914762698194995/769910239196741662/J2MT9A04_400x400.png",
```
**donation-token** - Это токен от вашего аккаунта donationalerts. Как не удивительно нам нужен аккаунт. Если он у вас есть, заходите в него.
Далее заходим в **Настройки** -> **Главные настройки(General settings)**

![](https://cdn.discordapp.com/attachments/732211790804680814/769936491220041748/unknown.png)

Дальше видим **Secret token(Секретный ключ/токен)**, нажимаем на **Show(Показать)** и копируем ключ. Вставляет в конфиг **donation-token**

![](https://cdn.discordapp.com/attachments/732211790804680814/769936711110361088/unknown.png)


Далее, **pick** - картинка которая будет отображаться рядом с именем пользователя. Можете впринцепе не трогать.

![](https://cdn.discordapp.com/attachments/732211790804680814/769937289961930782/unknown.png)

<br><br>

Ну и последнии две строчки.
```
    "discord-hook-id": "",
    "discord-hook-token": ""
```
**discord-hook-id** - отвечает за айди вебхука.
**discord-hook-token** - токен от вебхука.

<br><br>

Заходи в настройки любого канала, далее **Интеграции** и затем **Создать вебхук**
![](https://cdn.discordapp.com/attachments/732211790804680814/769938194074042398/unknown.png)
> Так же, если вы с телефона, и у вас нету данной кнопки, используйте браузерную версию Discord'a


Копируем ссылку созданного вебхука.
![](https://cdn.discordapp.com/attachments/732211790804680814/769938965725708348/unknown.png)

Часть с цифрами это айди вебхука. Копируем его и вставляем в конфиг(**discord-hook-id**)

А длинная часть состоящая из букв и цифр, это токен, копируем и так же вставляем в конфиг(**discord-hook-token**)

![](https://cdn.discordapp.com/attachments/732211790804680814/769939465477029898/unknown.png)

<br><br>

# 🔌Установка:
Для начало нам нужно скачать сам **typescript**. Это очень легко, всего лишь одна команда в командную строку. 

### npm
```
$ npm i -g typescript
```

### yarn 
```
$ yarn add typescript --dev
```

- Если у вас не получилось установить **typescript**, скорее всего у вас нету **nodejs**(если вы пытались установить через **npm**)
- [**Скачать nodejs**(кликабельно)](https://nodejs.org/en/)
- [**Скачать yarn**(кликабельно)](https://yarnpkg.com/getting-started/install)

<br><br>

Далее нам необходимо скомпилировать **ts** файлы в **js**. Для этого пропишем команду:
```
$ tsc index.ts // index.ts - название файла
```

<br>

Если во время компиляции у вас возникла ошибка по типу `tsc это неизвестная команда` то вы не установили сам **typescript**. Если у вас возникли сложности с этим заходите в наш [Discord сервер](https://discord.gg/RPb2KXN)

<br><br>

> Так же вы можете с толкнуться с ошибкой на подобии:
> ![](https://media.discordapp.net/attachments/531206172100001794/769913049393791026/unknown.png?width=909&height=486)
> В таком случае пропишите в консоле:
> ```
> $ npm install @types/node --save-dev
> ```
> (Спасибо [Picalines#3146](https://github.com/Picalines) за помощь)

<br><br>

После успешной компиляции у вас появится файлы **index.js**. Запускаем его через **nodejs**
```
$ node index.js
```
Видим что в консоль выводится надпись о том что все работает корректно. Поздравляю! Теперь вы имеете свои алерты на донаты!

Так же не забываем установить нужные библиотеки:
```
npm i 

yarn add
```


<br><br>

# 🤝 Помощь.
- [Discord](https://discord.gg/RPb2KXN)

<br><br>

# 💸 Поддержать проект:
- [**QIWI**](https://qiwi.com/p/380956398566)
- [**donationalerts**(ваш донат отобразится у нас на сервере)](https://www.donationalerts.com/r/reedi)
