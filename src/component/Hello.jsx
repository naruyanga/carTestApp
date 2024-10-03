

const Hello = (props)=>{
    const name = props.name
    const age = props.age
    return (<div>
        <div>Hello</div>
        <div>name:{name}</div>
        <div>age:{age}</div>
    </div>);
}
export default Hello;