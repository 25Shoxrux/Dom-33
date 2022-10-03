const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3,
                m: 'm1.png'
            },
            chip: {
                title: 'Apple M1 chip',
                description: '',
                memory: 'memory.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance <br> and power efficiency'
            },
            memory: {
                size: 2,
                type: 'TB',
                title: 'Maximum configurable storage'
            },
            battery: {
                title: 'Up to 18 hours battery life',
                batteryImg: 'battery.png'
            },
            camera: {
                cameraImg: 'video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal <br> processor of M1 for drastically <br> improved performance'
            },
            weight: 2.8,
            touchiii: {
                touchImg: 'TouchID.png',
                soundImg: 'Sound.png',
                touchBarImg: 'TouchBar.png'
            },
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        price: 1299,
        img: 'macbook13.png',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3,
                m: 'm1.png'
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core <br> i5 or i7 processor',
                memory: 'memory.png'

            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance <br> and power efficiency'
            },
            memory: {
                size: 2,
                type: 'TB',
                title: 'Maximum configurable storage'
            },
            battery: {
                title: 'Up to 20 hours battery life',
                batteryImg: 'battery.png'
            },
            camera: {
                cameraImg: 'video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal <br> processor of M1 for drastically <br> improved performance'
            },
            weight: 3.0,
            touchiii: {
                touchImg: 'TouchID.png',
                soundImg: 'Sound.png',
                touchBarImg: 'TouchBar.png'
            },
            other: [
                'Touch ID',
                'Sound',
                'Touch Bar'
            ]
        }
    },
    {
        title: 'MacBook Air',
        price: 999,
        img: 'macbookpro.png',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7','#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16,
                m: 'intel.png'

            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: '',
                memory: 'memory2.png'
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'TB',
                title: 'Maximum configurable storage'
            },
            battery: {
                title: 'Up to 11 hours battery life',
                batteryImg: 'battery.png'
            }, 
            camera: {
                cameraImg: 'video.png',
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            touchiii: {
                touchImg: 'TouchID.png',
                soundImg: 'Sound.png',
                touchBarImg: 'TouchBar.png'
            },
            other: [
                'Touch ID',
                'Sound',
                'Touch Bar'
            ]
        }
    },
]

let container = document.querySelector('.container')





for(let item of data){

    let box = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')
    let span1 = document.createElement('span')
    let a = document.createElement('a')
    let ab = document.createElement('a')
    let bottomDiv = document.createElement('div')
    let bottomDiv1 = document.createElement('div')
    let bottomDiv2 = document.createElement('div')
    let bottomDiv3 = document.createElement('div')
    let hr = document.createElement('div')
    let hr1 = document.createElement('div')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    let img3 = document.createElement('img')
    let img4 = document.createElement('img')
    let img9 = document.createElement('img')
    let img10 = document.createElement('img')
    let img8 = document.createElement('img')
    let span4 = document.createElement('span')
    let span5 = document.createElement('span')
    let span6 = document.createElement('div')
    let span7 = document.createElement('span')
    let span8 = document.createElement('div')
    let div9 = document.createElement('div')
    let div15 = document.createElement('div')
    let div16 = document.createElement('div')
    let span9 = document.createElement('span')
    let span10 = document.createElement('span')
    let span11 = document.createElement('span')
    let span12 = document.createElement('span')
    let span13 = document.createElement('span')
    let span14 = document.createElement('span')
    let span15 = document.createElement('span')
    let span16 = document.createElement('span')
    let span17 = document.createElement('span')
    

    
    box.classList.add('box')
    span.classList.add('span')
    span1.classList.add('span1')
    bottomDiv.classList.add('bottomDiv')
    bottomDiv1.classList.add('bottomDiv1')
    bottomDiv2.classList.add('bottomDiv2')
    bottomDiv3.classList.add('bottomDiv3')
    ab.classList.add('bottom')
    span6.classList.add('span6')
    span8.classList.add('span8')
    div9.classList.add('div9')
    img1.classList.add('img1')
    img2.classList.add('img2')
    img3.classList.add('img3')
    img4.classList.add('img4')
    img9.classList.add('img9')
    img8.classList.add('img8')
    img10.classList.add('img10')
    div15.classList.add('div15')
    div16.classList.add('div16')
    span15.classList.add('span15')
    hr.classList.add('hr')
    hr1.classList.add('hr')
    

    img.src = `./img/${item.img}`
    img1.src = `./img/${item.specs.display.m}`
    img2.src = `./img/${item.specs.chip.memory}`
    img3.src = `./img/${item.specs.battery.batteryImg}`
    img4.src = `./img/${item.specs.camera.cameraImg}`
    img8.src = `./img/${item.specs.touchiii.touchImg}`
    img9.src = `./img/${item.specs.touchiii.soundImg}`
    img10.src = `./img/${item.specs.touchiii.touchBarImg}`


    
    span1.innerHTML = ` From $${item.price}`
    span.innerHTML = item.title
    ab.innerHTML= 'Buy'
    ab.href = item.url
    a.innerHTML= 'Leam more >'
    a.href = item.url
    span2.innerHTML = item.specs.display.size
    span3.innerHTML = item.specs.display.title
    span4.innerHTML = item.specs.chip.title
    span6.innerHTML = item.specs.chip.description
    span5.innerHTML = item.specs.display.title
    span7.innerHTML = item.specs.ram.title
    span8.innerHTML = item.specs.ram.description
    span9.innerHTML = item.specs.memory.size
    span10.innerHTML = item.specs.memory.type
    span11.innerHTML = item.specs.memory.title
    span12.innerHTML = item.specs.battery.title
    span13.innerHTML = item.specs.camera.title
    span14.innerHTML = item.specs.camera.description
    span15.innerHTML = `${item.specs.weight}.lb`
    span16.innerHTML = 'Weight'
    span17.innerHTML = item.specs.other


    bottomDiv1.style.background = item.colors[0]
    bottomDiv2.style.background = item.colors[1]
    bottomDiv3.style.background = item.colors[2]




    container.append(box)
    bottomDiv.append(bottomDiv1, bottomDiv2, bottomDiv3)
    div9.append(span9, span10)
    div15.append(span14)
    div16.append(img10, img9, img8)
    box.append(img, span , span1, bottomDiv, ab, hr,  span2, span3, img1, span4,span6, img2, span7, span8, div9, span11, img3, span12, img4, span13, div15,span15, span16, div16, span17, hr1,  a)
}
