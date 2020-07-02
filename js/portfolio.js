const works = [
    {
        imgsrc : `../img/logo.jpg`,
        title : `Pet shop`,
        discription : `qwertysadcdsjslkfjdksljfklsjfklsjfklsjfkljsklfjsklfjlksjfkldsjflkjslkfjdsklfjlkjflksjlkfjsklfdsdsfgddsf`,
        link : `https://stellach90.github.io/webstore/#`
    },
    {
        imgsrc : `../img/logo.jpg`,
        title : `Web megazine`,
        discription : `qwertysadcdsjslkfjdksljfklsjfklsjfklsjfkljsklfjsklfjlksjfkldsjflkjslkfjdsklfjlkjflksjlkfjsklfdsdsfgddsf`,
        link : `https://stellach90.github.io/Articleprj/`
    },
    {
        imgsrc : `../img/logo.jpg`,
        title : `3D Minions work`,
        discription : `3D chessboard (MAYA)`,
        link : ``
    },
    {
        imgsrc : `../img/banner/banner4.png`,
        title : `Green P`,
        discription : `sdfg`,
        link : `../html/greenp.html`
    }
]

function getworkAsHtmlString(work) {

    return `<article class="work">
        <div class="pf-img"><a href="${work.link}">
        <img src="${work.imgsrc}" alt="Work Image"></a></div>
        <h3><a>${work.title}</a></h3>
        <p>${work.discription}</p>
        </article>`;
};

function renderWorks(arrToRender) {
    const arrOfHtmlworks = arrToRender.map(getworkAsHtmlString);
    const strOfHtmlworks = arrOfHtmlworks.join('\n');
      
    document.getElementById('works').innerHTML = strOfHtmlworks;
};

renderWorks(works);

