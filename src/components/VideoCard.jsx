import parisImage from "../assets/paris.jpg";


export default function VideoCard(props) {
  return (
    <div class="card card-compact bg-base-100 shadow-xl pb-4">
      <figure>
        <img src={parisImage} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>

        </div>
      </div>
    </div>
  )
}
