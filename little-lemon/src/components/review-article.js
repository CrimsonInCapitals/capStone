
const ReviewArticle = ({Review,color, personimg}) =>{
    var rating = ''
    for(let i = 0; i < Review.rating; i++){
        rating = rating + '*'
    }
    return (
      <article className="review" Style={'background-color:'+ color}>
                <div>
                <picture>
                    <img src={personimg} alt={Review.name}/>
                </picture>
                <h3>{Review.name}</h3>
                </div>
                {Review.comment? <details><summary>{rating}</summary><p>{Review.comment}</p></details>: rating}
      </article>
     );
  }
  export default ReviewArticle;