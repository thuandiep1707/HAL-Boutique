
function SliderElm1 (props){
    const {data} = props
    return(
        <div className="contain">
            <div className="contain_img">
                <img src={data.img1} alt="slide" className='animation-img up'/>
                <img src={data.img2} alt="slide" className='animation-img down' />
                <img src={data.img3} alt="slide" className='animation-img up' />
            </div>
            <div className="contain_content">
                <h3 className="title">{data?.title}</h3>
                <p className='des'>{data?.des}</p>
            </div>
        </div>
    )
}

function SliderElm2 (props){
    const {data} = props
    return(
        <div className="contain">
            <div className="contain_img">
                <img src={data.img1} alt="slide" className='animation-img up'/>
                <img src={data.img2} alt="slide" className='animation-img down' />
                <img src={data.img3} alt="slide" className='animation-img up' />
            </div>
            <div className="contain_content">
                <h3 className="title">{data?.title}</h3>
                <p className='des'>{data?.des}</p>
            </div>
        </div>
    )
}

export { SliderElm1, SliderElm2 }