import Gallery from "../components/EnrollBanner";
import Campuses from "../components/Campuses";
/*import Courses from "../components/CoursesComp";*/
import Facilities from "../components/Facilities";
/*import Testimonials from "../components/Testimonials";*/
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Campuses />
      <Facilities />
      <Gallery />
    </>
  );
};

export default Home;
