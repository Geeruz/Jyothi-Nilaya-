import PrayerHall from '../assets/images/PrayerHall.jpg'
import Cafe from '../assets/images/Cafetaria.jpg'
import space from '../assets/images/Open_Space.jpg'

const Facilities = () => {
    return (
        <section className="facilities">
            <h1>Our Facilities</h1>
            <div className="row">
                <div className="facilities-col">
                    <img src={PrayerHall} alt="Prayer Hall" />
                    <h3>Prayer Hall</h3>
                </div>

                <div className="facilities-col">
                    <img src={Cafe} alt="Cafe" />
                    <h3>Cafeteria</h3>
                </div>

                <div className="facilities-col">
                    <img src={space} alt="Open Space" />
                    <h3>Open Space</h3>
                </div>
            </div>
        </section>
    );
}

export default Facilities;