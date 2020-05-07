
const works = [];
for (let i = 0; i < 17; i++){
    works.push({imgsrc : `../img/w1/${i}.png`
});
}

function getworkAsHtmlString(work) {

    return `<article class="work">
        <img src="${work.imgsrc}" alt="Work Image">
        </article>`;
};

function renderWorks(arrToRender) {
    const arrOfHtmlworks = arrToRender.map(getworkAsHtmlString);
    const strOfHtmlworks = arrOfHtmlworks.join('\n');
      
    document.getElementById('files').innerHTML = strOfHtmlworks;
};

renderWorks(works);

