import campus01 from '../assets/images/campus01.jpg'
import campus02 from '../assets/images/campus02.jpg'
import campus03 from '../assets/images/campus03.jpg'

const Campuses = () => {
    return (
        <section className="facilities">
            <h1>Housing</h1>
            <div className="row">
                <div className="facilities-col">
                    <img src={campus01 } alt="Campus" />
                </div>

                <div className="facilities-col">
                    <img src={campus02} alt="Campus" />
                </div> 

                <div className="facilities-col">
                    <img src={campus03} alt="Campus" />
                </div>
            </div>
        </section>
    );
}

export default Campuses;