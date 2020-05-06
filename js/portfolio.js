const works = [
    {
        imgsrc : `../img/logo.jpg`,
        title : `fdsfkfldsfl`,
        discription : `qwerty`
    },
    {
        imgsrc : `../img/logo.jpg`,
        title : `fdsfkfldsfl`,
        discription : `sdfghj`
    },
    {
        imgsrc : `../img/logo.jpg`,
        title : `fdsfkfldsfl`,
        discription : `sdfg`
    },
    {
        imgsrc : `../img/logo.jpg`,
        title : `fdsfkfldsfl`,
        discription : `sdfg`
    }
]

function getworkAsHtmlString(work) {

    return `<article class="work">
        <div class="pf-img"><a>
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

