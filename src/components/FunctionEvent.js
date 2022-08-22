function FunctionEvent(){

    function handleClick(){
        console.log("button click");
    }

    return (
        <div>
            Functional Component
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default FunctionEvent;