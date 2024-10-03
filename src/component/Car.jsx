const Car = (props)=>{
    const imgUrl =props.imgUrl
    const mashin = props.mashin    
    const text1= props.text1
    const text2= props.text2
    return (<div className="box">
        <img src={imgUrl}/>
        <div className="mashin">{mashin}</div>
        <div>{text1}</div>
        <div>{text2}</div>
        <div></div>
    </div>)
}
export  default Car;