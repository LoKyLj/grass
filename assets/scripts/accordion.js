const accordionCheckboxes = document.querySelectorAll('.accordion-tab__input');
const accordionPanels = document.querySelectorAll('.accordion-panel');

for (let index = 0; index < accordionCheckboxes.length; index++) {
    const accordionCheckbox = accordionCheckboxes[index];

    const accordionPanelReveal = () => {
        if (accordionPanels[index].style.maxHeight) {
            accordionPanels[index].style.maxHeight = null;
            accordionPanels[index].style.opacity = null;
        } else {
            accordionPanels[index].style.maxHeight = accordionPanels[index].scrollHeight + "px";
            accordionPanels[index].style.opacity = "1";
        }
    } 
    accordionCheckbox.addEventListener('click', accordionPanelReveal);
}