const slider = document.getElementById('slider');
const sliderThumb = document.getElementById('sliderThumb');
const sliderValue = document.getElementById('sliderValue');

slider.addEventListener('input', () => {
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const value = parseInt(slider.value);

    const thumbPosition = ((value - min) / (max - min)) * 100;
    sliderThumb.style.left = `calc(${thumbPosition}% - 10px)`; // Adjust the -10px based on your thumb size
    sliderValue.textContent = value;
});

slider.addEventListener('change', () => {
    // Handle the slider value change when the user stops dragging
    console.log('Slider value changed to:', slider.value);
});
