const ActiveLink = (target, set) => {

    const elem = document.getElementById(target);

    const Visible = function (elem) {
        const targetPosition = {
            top: window.pageYOffset + elem.getBoundingClientRect().top,
            bottom: window.pageYOffset + elem.getBoundingClientRect().bottom
        }
        const windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
        };
        if ((targetPosition.bottom > (windowPosition.top + 60)) && (targetPosition.top <= (windowPosition.top + 60))) // Если позиция верхней части элемента меньше позиции нижней части окна, то элемент виден снизу
            {
                set(true);
            } else {
                set(false);
            }
    };
        window.addEventListener('scroll', function() {
            Visible (elem);
        });
    
        Visible (elem);
}

export default ActiveLink;