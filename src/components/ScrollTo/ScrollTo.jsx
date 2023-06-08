const ScrollTo = (target) => {
    setTimeout(() => {
        const element = document.getElementById(target);
        const targetPosition = {
            top: window.pageYOffset + element.getBoundingClientRect().top
    }
    window.scrollTo({
        top: (targetPosition.top - 60),
        behavior: "smooth"
    });
    })
}

    export default ScrollTo;