const ItemListContainer = ({saludo}) => {
    const EstilosDeSaludo = {
        fontSize: "60px",
        fontWeight:"600",
        textAlign:"center",
        padding:"20px",
        color: "white"
    }
    return(
        <div style={EstilosDeSaludo}>
            {saludo}
        </div>
    )
}

export default ItemListContainer;