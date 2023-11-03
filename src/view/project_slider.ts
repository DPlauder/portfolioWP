
class ProjectSlider{
        private sliderParent;
    constructor(parent: HTMLDivElement){
        this.sliderParent = parent;
        this.createSliderContainer();
    }
    private createSliderContainer(): void
    {
        const container = document.createElement('div');
        container.id = "slideshow-container";
        container.classList.add('slideshow-container');    
        this.sliderParent.appendChild(container);
        this.createImageContainer(container);
    }
    private createImageContainer(container: HTMLDivElement){
        for(let i = 0; i < 4; i++){
            const img_container = document.createElement('div');
            img_container.classList.add('content', 'slider-img')
            container.appendChild(img_container);

        }
    }
}

export {ProjectSlider};