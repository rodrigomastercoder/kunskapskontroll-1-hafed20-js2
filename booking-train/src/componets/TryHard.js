const TryHard = (props) => {
    const { render } = props;
    var key = 0;
    return Object.keys(render).map((i, idex) => {
    const {firstname, lastname, quantity, title, klass} = render[i];
    key = key + 1;
    return (
        <div key ={key.toString(10)}>
            <h1>Name {firstname} </h1>
            <h2>LastName{lastname}</h2>
            <h1>Quantity {quantity} </h1>
            <h2>Tittle {title}</h2>
            <h2>Klass {klass}</h2>
        </div>
    )
    })
}
 
export default TryHard;