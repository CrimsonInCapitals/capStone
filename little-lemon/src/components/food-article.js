
const FoodArticle = ({foodItem,color}) =>{
    return (
      <article className="food" Style={'background-color:'+ color}>
                <picture>
                    <img href={foodItem.img}/>
                </picture>
                <h1>{foodItem.name}</h1>
                <dd>
                <dt>{foodItem.price}</dt>
                <dt>{foodItem.discription}</dt>
                </dd>
                <a href='#'>Order online</a>
      </article>
     );
  }
  export default FoodArticle;