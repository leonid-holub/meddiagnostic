const OnScreen = (target, set) => {
    const Visible = function (target) {
        const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        }
        const windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
        };
        if (targetPosition.top < windowPosition.bottom) // Если позиция верхней части элемента меньше позиции нижней части окна, то элемент виден снизу
            {
                set(true);
            } 
    };
        window.addEventListener('scroll', function() {
            Visible (target);
        });
    
        Visible (target);
}

export default OnScreen;