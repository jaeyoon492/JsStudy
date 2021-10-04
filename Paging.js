const box = document.querySelector(".buttons");

let blockSize = 2;
let totalPage = 11;
let currentPage = 0;

let currentBlock = Math.floor(currentPage / blockSize);

function goPrev() {
  if (currentBlock > 0) {
    currentBlock = currentBlock - 1;
    render();
  }
}

function goNext() {
  if (currentBlock < totalPage / blockSize) {
    currentPage = currentPage + blockSize;
    render();
  }
}

addEventListener("click", goPrev);
addEventListener("click", goNext);

function render() {
  if (currentBlock > 0) {
    let prev = `<button>prev</button>`;
    box.insertAdjacentHTML("beforebegin", prev);
  }
  Array.from(
    Array(
      totalPage - currentBlock * blockSize < blockSize
        ? totalPage - currentBlock * blockSize
        : blockSize
    ).keys()
  )
    .map((index) => currentBlock * blockSize + index)
    .map((num) => {
      const buttons = `
              <button>
                  ${num}
              </button>
            `;
      box.insertAdjacentHTML("beforebegin", buttons);
    });

  if (currentBlock < totalPage / blockSize) {
    let next = `<button>next</button>`;
    box.insertAdjacentHTML("beforebegin", next);
  }
}

function init() {
  render();
}

init();
