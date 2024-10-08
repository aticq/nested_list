# Тестовое задание: Вложенный Список

Данный проект представляет собой React-приложение, реализующее вложенный список с возможностью добавления и удаления элементов. Приложение разработано с использованием методологии Feature-Sliced Design (FSD) для обеспечения лучшей организации кода и удобства сопровождения.

## Оглавление

1. [Структура проекта](#структура-проекта)
2. [Функциональность](#функциональность)
3. [Установка и запуск](#установка-и-запуск)
    1. [Предварительные требования](#предварительные-требования)
    2. [Установка](#установка)
4. [Доступные команды](#доступные-команды)
5. [Используемые технологии](#используемые-технологии)
6. [Лицензия](#лицензия)

## Структура проекта

Проект организован по принципам методологии Feature-Sliced Design (FSD), что позволяет разделить код на логические модули и облегчить масштабирование приложения.

## Функциональность

- **Вложенный список**: Возможность добавлять и удалять элементы в многоуровневом списке.
- **Модальные окна**:
    - **Добавление элемента**: Кастомное модальное окно для добавления нового элемента с поддержкой клавиш `Enter` для подтверждения и `Esc` для отмены.
    - **Подтверждение удаления**: Модальное окно для подтверждения удаления элемента.
- **Анимации и стилизация**: Плавные анимации появления и исчезновения модальных окон, стилизация компонентов с использованием `styled-components`.
- **Интерактивность**: Возможность сворачивать и разворачивать вложенные списки, индикация текущего уровня вложенности.

## Установка и запуск

### Предварительные требования

- **Node.js** версии 14 или выше
- **npm** или **yarn**

### Установка

1. **Клонируйте репозиторий**:

   ```bash
   git clone https://github.com/aticq/nested_list/
   cd nested_list
   ```

2. **Установите зависимости**:

   ```bash
   npm install
   # или
   yarn install
   ```

3. **Запустите приложение**:

   ```bash
   npm start
   # или
   yarn start
   ```

   Приложение будет доступно по адресу [http://localhost:3001](http://localhost:3001).

## Доступные команды

- **`npm start`**: Запускает приложение в режиме разработки.
- **`npm run build:prod`**: Создает оптимизированную сборку приложения для продакшена.
- **`npm run build:dev`**: Создает сборку приложения в режиме разработки.
- **`npm run clean`**: Удаляет директорию `dist` с предыдущими сборками.
- **`npm run lint`**: Запускает ESLint для проверки кода на наличие ошибок и потенциальных проблем.
- **`npm run lint:fix`**: Запускает ESLint с автоматическим исправлением обнаруженных проблем.

## Используемые технологии

- **React**: Библиотека для создания пользовательских интерфейсов.
- **TypeScript**: Строгая типизация для JavaScript.
- **Styled-Components**: Библиотека для стилизации компонентов с помощью CSS-in-JS.
- **Webpack**: Сборщик модулей для JavaScript.
- **ESLint**: Инструмент для анализа кода и выявления проблем.
- **Prettier**: Инструмент для форматирования кода.
- **React Icons**: Библиотека иконок для React.
- **Feature-Sliced Design (FSD)**: Методология организации кода.

## Лицензия

Проект распространяется под лицензией **MIT**.

