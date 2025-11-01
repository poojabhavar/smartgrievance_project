export const State=()=>
{
    let value=0;
    const HandleMe=()=>
    {
        
        value=value+1;
       console.log(value);


    };
    return(
        <>
        <h1>{value}</h1>
        <button onClick={HandleMe}>Click me</button>

        </>
    );
};