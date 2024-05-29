let listElements = document.querySelectorAll('.list_button-click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow');

        let height = 0;
        let Menu = listElement.nextElementSibling;
        if (Menu.clientHeight == "0") {
            height = Menu.scrollHeight;
        }

        Menu.style.height = height + "px";
    })
});
