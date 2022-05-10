const sampleImages = {
  elements: []
}

sampleImages.elements.push(
  document.getElementById('sample-image-1'),
  document.getElementById('sample-image-2'),
  document.getElementById('sample-image-3')
)

let index = 0
setInterval(() => {
  sampleImages.elements[index].classList.add('no-visibility')
  if (sampleImages.elements[index + 1]) {
    sampleImages.elements[index + 1].classList.remove('no-visibility')
    index++
  } else {
    index = 0
    sampleImages.elements[index].classList.remove('no-visibility')
  }
}, 5000)
