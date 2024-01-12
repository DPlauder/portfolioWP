//import "../assets";
var ProjectSlider = /** @class */ (function () {
    function ProjectSlider(parent) {
        this.sliderParent = parent;
        this.createSliderContainer();
    }
    ProjectSlider.prototype.createSliderContainer = function () {
        var container = document.createElement('div');
        container.id = "slideshow-container";
        container.classList.add('slideshow-container');
        this.sliderParent.appendChild(container);
        this.createImageContainer(container);
    };
    ProjectSlider.prototype.createImageContainer = function (container) {
        for (var i = 0; i < 4; i++) {
            var img_container = document.createElement('div');
            img_container.classList.add('content', 'slider-img');
            //img_container.style.backgroundImage = "url('img2.png')";
            container.appendChild(img_container);
        }
    };
    return ProjectSlider;
}());
export { ProjectSlider };
//# sourceMappingURL=project_slider.js.map