import react from 'react'

function PrintVill(vill){
    let {village}=vill
    return <h1>{village}</h1>
}
function PrintMyName(props){
    // let {name,age}=props;
    return <h1>My name is {props.name} of age {props.age}</h1>
}
function PrintMyNames(){
    return (
    <>
    <PrintMyName name="Amrit " age={35}/>
    <PrintMyName name="Rohit" age={14} />
    <PrintMyName name="Sachin" age={11} />
    <PrintMyName name="Vikash" age = {30}/>
    <PrintMyName name="Awaneet" age={24}/>
    <PrintVill village="Kateya"/>
    <PrintVill village="Bhore"/>
    <PrintVill village="Shyam Nagar"/>
    </>
    )
}
export default PrintMyNames;