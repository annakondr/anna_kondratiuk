'use strict';
const container = document.getElementById('container');
let objectTree = {
        "Рыбы": {
            "Форель": {},
            "Щука": {}
        },

        "Деревья": {
            "Хвойные": {
                "Лиственница": {},
                "Ель": {}
            },
            "Цветковые": {
                "Берёза": {},
                "Тополь": {}
            }
        }
    };

function createTree(element, object) {
    const ul = document.createElement("ul");
    element.append(ul);
    for (const tree in object) {
        const li = document.createElement("li");
        li.innerHTML = tree;
        ul.append(li);

        if (Object.keys(object[tree]).length > 0) {
            createTree(li, object[tree]);
        }
    }
}

createTree(container, objectTree);