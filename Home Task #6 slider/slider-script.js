const img1 = 'https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo='
const img2 = 'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg'
const img3 = 'https://images.all-free-download.com/images/graphiclarge/landscape_nature_background_272057.jpg'

var currentImgName = 'Mountains';

function changeImg(imgName) {
    const mainImgEl = document.getElementById("main-img");

    if (imgName === 'Mountains') {
        mainImgEl.src = img1
    }

    if (imgName === 'Rainbow') {
        mainImgEl.src = img2
    }

    if (imgName === 'Road') {
        mainImgEl.src = img3
    }

    currentImgName = imgName;
    changeActiveClass();
}

function goNext() {
    if (currentImgName === 'Mountains') {
        changeImg('Rainbow');
    } else if (currentImgName === 'Rainbow') {
        changeImg('Road');
    } else if (currentImgName === 'Road') {
        changeImg('Mountains');
    }
}

function goPrev() {
    if (currentImgName === 'Mountains') {
        changeImg('Road');
    } else if (currentImgName === 'Road') {
        changeImg('Rainbow');
    } else if (currentImgName === 'Rainbow') {
        changeImg('Mountains')
    }
}

function changeActiveClass() {
    const dotEl1 = document.getElementById('dot-1');
    const dotEl2 = document.getElementById('dot-2');
    const dotEl3 = document.getElementById('dot-3');

    dotEl1.classList.remove('active');
    dotEl2.classList.remove('active');
    dotEl3.classList.remove('active');

    if (currentImgName === 'Mountains') {
        dotEl1.classList.add('active');
    }


    if (currentImgName === 'Rainbow') {
        dotEl2.classList.add('active');
    }


    if (currentImgName === 'Road') {
        dotEl3.classList.add('active');
    }
}