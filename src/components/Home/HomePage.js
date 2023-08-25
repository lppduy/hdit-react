import videoHompage from '../../assets/video-homepage.mp4';

function HomePage(props) {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHompage} type="video/mp4 " />
      </video>

      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore amet,
          iste eius cupiditate eum veniam voluptatem rerum repudiandae
          exercitationem nobis ratione iusto illo laboriosam harum inventore.
          Odio iusto sequi quia!
        </div>
        <div className="title-3">
          <button>Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
