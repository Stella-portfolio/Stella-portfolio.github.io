const works = [
    {
        imgsrc : `../img/banner/catsmart.png`,
        title : `Pet shop`,
        discription : `Re-designed Petsmart`,
        link : `https://stellach90.github.io/webstore/#`
    },
    {
        imgsrc : `../img/banner/banner4.png`,
        title : `Green P`,
        discription : `sdfg`,
        link : `../html/greenp.html`
    },
    {
        imgsrc : `../img/banner/minions.png`,
        title : `3D Minions work`,
        discription : `3D chessboard (MAYA)`,
        link : `../3D minions/html/main.html`
    },
    {
        imgsrc : `../img/banner/wine.png`,
        title : `3D cheese plate work`,
        discription : `3D cheese plate and wine (MAYA)`,
        link : `../html/wine.html`
    }
]

function getworkAsHtmlString(work) {

    return `<article class="work">
        <div class="pf-img"><a href="${work.link}">
        <img src="${work.imgsrc}" alt="Work Image" class="shadow"></a></div>
        <h3><a class="t">${work.title}</a></h3>
        <p>${work.discription}</p>
        </article>`;
};

function renderWorks(arrToRender) {
    const arrOfHtmlworks = arrToRender.map(getworkAsHtmlString);
    const strOfHtmlworks = arrOfHtmlworks.join('\n');
      
    document.getElementById('works').innerHTML = strOfHtmlworks;
};

renderWorks(works);
