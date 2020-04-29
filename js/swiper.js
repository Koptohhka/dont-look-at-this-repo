(() => {
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    const filmsList = document.getElementById('films-list');
    const filmListItem = document.querySelector('.films__list-item');

    let translateValue = Number(filmsList.dataset.translateStep);
    let translateStep = translateValue;

    let toSwipeLeft = () => {
        let currentTraslatePixels = /\d+/.exec(filmsList.style.transform)[0];
        //console.log(currentTraslatePixels);
        translateStep = Number(currentTraslatePixels) - translateValue;
        console.log(translateStep);
        filmsList.style.transform = `translateX(-${translateStep}px)`;
    }
 
    let toSwipeRight = () => {
        let currentTraslatePixels = /\d+/.exec(filmsList.style.transform)[0];
        console.log(currentTraslatePixels);
        translateStep = Number(currentTraslatePixels) + translateValue;
        filmsList.style.transform = `translateX(-${translateStep}px)`;
    }

    arrowLeft.addEventListener('click', toSwipeLeft)
    arrowRight.addEventListener('click', toSwipeRight);

}) ()