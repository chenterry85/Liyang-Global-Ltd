window.onload = function (){

  const NUM_ROWS = 3;
  const NUM_IMAGES = 100;
  const IMAGES = [];
  for (let i = 1; i <= NUM_IMAGES; i++) {
    IMAGES.push("image/gallery/a"+i+".jpg");
  }

  let rows = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    rows.push(row);
  }

  let wall = document.getElementById('wall');
  for (let i = 0; i < IMAGES.length; i++) {
    let index = i % rows.length;
    let row = rows[index];
    let onBottomRow = index === rows.length - 1;
    if (onBottomRow) {
      let frame = document.createElement('div');
      frame.classList.add('frame');
      frame.innerHTML = `
        <img src="${IMAGES[i]}" onclick="expandImage(this)">
        <div class="reflection">
          <img src="${IMAGES[i]}">
        </div>
      `;
      row.appendChild(frame);
    } else {
      let img = document.createElement('div');
      img.innerHTML = `
        <img src="${IMAGES[i]}" onclick="expandImage(this)">
      `;
      row.appendChild(img);
    }
  }

  rows.forEach(row => {
    wall.appendChild(row);
  });

  let debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
      var context = this,args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  let scrollPosition = 0;
  let scrollWall = debounce(event => {
    scrollPosition -= event.deltaY;
    wall.style.transform = `rotateY(45deg) translateX(${scrollPosition}px)`;
  }, 10);

  window.addEventListener('wheel', scrollWall);

}

function expandImage(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
