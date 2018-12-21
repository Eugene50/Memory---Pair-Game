/* window.onload = function () {
    const div = document.getElementById('field');
    const img = document.getElementsByTagName('img');
    div.addEventListener('click', function (el) {
        console.log('click is done');
        //document.getElementById('banana').style.visibility = 'hidden';
    })
} */

window.onload = function () {
    const container  = document.getElementById('wrapper');

    images.sort(function() { return 0.5 - Math.random() });  //shuflle array
    images.forEach(el => {
        let div = document.createElement('div');
        div.id = 'field';
        div.innerHTML = el;
        container.appendChild(div);
    });
    
    container.addEventListener('click', function (el) {
        if(el.target.tagName = 'img'){
            el.id  = 'close';
        }
    })
}






/* arr.sort(function() { return 0.5 - Math.random() }); */