const startGallery = () => {
    if (document.querySelectorAll('.gallery-item')) {
        const galleryList = document.querySelectorAll('.gallery-item');
        const galleryListArray = Array.from(galleryList);

        for (let index = 0; index < galleryListArray.length; index++) {
            const element = galleryListArray[index];
            if (element.querySelector('img').src.includes('undefined')) {
                element.classList.remove('gallery-item')
            }
        }
    }

    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const modalVideo = document.querySelector('.modal-video');
    const closeBtn = document.querySelectorAll('.closeButton');
    const closeBtnBox = document.querySelector('.closeButton-box');
    const prevBtn = document.querySelector('.prev--wrapper');
    const nextBtn = document.querySelector('.next--wrapper');
    let currentImageIndex = -1;

    function openModal(index) {
        if (index < 1) {
            index = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            index = 1;
        }

        const content = galleryItems[index].querySelector('img, video');
        if (content.tagName === 'IMG') {
            modalImage.src = content.src;
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
        } else if (content.tagName === 'VIDEO') {
            modalVideo.querySelector('source').src = content.querySelector('source').src;
            modalImage.style.display = 'none';
            modalVideo.style.display = 'block';
        }

        // console.log(content.src);

        modal.classList.remove('modal--hide');
        modal.classList.add('modal--display');
        currentImageIndex = index;
    }

    function closeModal() {
        modal.classList.add('modal--hide');
    }

    function showPrevious() {
        openModal(currentImageIndex - 1);
    }

    function showNext() {
        openModal(currentImageIndex + 1);
    }

    galleryItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            openModal(index);
        });
    });

    closeBtn.forEach(element => {
        element.addEventListener('click', closeModal);
    });
    closeBtnBox.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape") {
            closeModal();
        } else if (e.key === "ArrowLeft") {
            showPrevious();
        } else if (e.key === "ArrowRight") {
            showNext();
        }
    });
}

startGallery();