import { useState, useEffect } from "react"


function App(){

    const [widthWindow, setWidth] = useState(window.innerWidth);
    const [heightWindow, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize', windowChange)
        console.log('cardo')

        return () => {
            window.removeEventListener('resize', windowChange)
            console.log('cardox')
        }
    }, [])

    useEffect(()=>{
        document.title = `Size: ${widthWindow} ${heightWindow}`
    })


    function windowChange(){
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    
    return (
        <>
            <p>width: {widthWindow}</p>
            <p>height: {heightWindow}</p>
        </>
    )
}
export default App