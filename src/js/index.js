const App = () => {
    return(
        <div className="App">
            <h1>Juego de Memoria</h1>
            <Cards />
        </div>        
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

function Cards(){
    const [items, setItems] = React.useState([
        {id: 1, img: './src/img/technics.png', stat: "" },
        {id: 1, img: './src/img/technics.png', stat: "" },
        {id: 2, img: './src/img/kenwood.png', stat: "" },
        {id: 2, img: './src/img/kenwood.png', stat: "" },
        {id: 3, img: './src/img/marantz.jpg', stat: "" },
        {id: 3, img: './src/img/marantz.jpg', stat: "" },
        {id: 4, img: './src/img/denon.png', stat: "" },
        {id: 4, img: './src/img/denon.png', stat: "" },
        {id: 5, img: './src/img/luxman.png', stat: "" },
        {id: 5, img: './src/img/luxman.png', stat: "" },
        {id: 6, img: './src/img/aiwa.png', stat: "" },
        {id: 6, img: './src/img/aiwa.png', stat: "" },
        {id: 7, img: './src/img/accuphase.png', stat: "" },
        {id: 7, img: './src/img/accuphase.png', stat: "" },
        {id: 8, img: './src/img/dbx.png', stat: "" },
        {id: 8, img: './src/img/dbx.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = React.useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}