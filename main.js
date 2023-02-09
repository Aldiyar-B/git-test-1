/* 
// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest;

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function () {
	if (xhr.status != 200) {
		alert(`Ошибка ${xhr.status}:  ${xhr.statusText}`)
	} else {
		alert(`Готово, получили ${xhr.response.length} байт `)
	}
};

xhr.onprogress = function (event) {
	if (event.lengthComputable) {
		alert(`Получено ${event.loaded} из ${event.total} байт`)
	} else {
		alert(`Получено ${event.loaded} байт`);
	}
};

xhr.onerror = function () {
	alert(`Запрос не удался`)
}
 */
