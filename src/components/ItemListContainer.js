const ItemListContainer = (greeting) => {
  return (
    <section className="container-products">
      <div className="title-home">
        <h1>{greeting.mensajeHome}</h1>
      </div>
    </section>
  )
}

export {ItemListContainer}