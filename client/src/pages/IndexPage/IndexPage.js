const IndexPage = () =>{
    
    const carrouselImages = [
        'https://jumbo.vtexassets.com/arquivos/ids/417442/Lechuga-escarola-un.jpg?v=637486512651670000',
        'https://api.time.com/wp-content/uploads/2020/04/Boss-Turns-Into-Potato.jpg?quality=85&w=1200&h=628&crop=1',
        'https://cdn2.salud180.com/sites/default/files/field/image/2019/04/propiedades-zanahoria.jpg'
    ]

    
    let num = 0

    const previusImage = () =>{
        const carrouselImg = document.getElementById('carrousel-image')
        if (num > 0) {
            num -- 
            carrouselImg.src = carrouselImages[num]
        } else {
            num = carrouselImages.length - 1;
            carrouselImg.src = carrouselImages[num]
        }
    }


    const nextImage = () =>{
        const carrouselImg = document.getElementById('carrousel-image')
        if (num < carrouselImages.length - 1){
            num ++
            carrouselImg.src = carrouselImages[num]
        } else {
            num = 0
            carrouselImg.src = carrouselImages[num]
        }
    }

    return(
    <div className="carrousel">
        <button id="btn-previous" onClick={previusImage}> &#8592; </button>
        <div className="carrousel__img-container">
        <img id="carrousel-image" src="https://jumbo.vtexassets.com/arquivos/ids/417442/Lechuga-escarola-un.jpg?v=637486512651670000" alt="product" />
        </div>
        <button id="btn-next" onClick={nextImage}> &#8594; </button>
    </div>
    )

}

export default IndexPage;