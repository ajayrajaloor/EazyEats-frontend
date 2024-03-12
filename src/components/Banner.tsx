import bannerImage from "../assets/banner.png"

const Banner = () => {
  return(
    <div>
        <img src={bannerImage} className="w-full max-h-[400px] object-cover" />
    </div>
  )
}

export default Banner;