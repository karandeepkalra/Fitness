// import React, { useEffect, useState } from 'react';
// import './FotnessoHeader.css';
// import classes3 from '../../../assets/classes-3.jpg'
// import classes2 from '../../../assets/classes-2.jpg'
// import classes1 from '../../../assets/classes-1.jpg'
// import classes6 from '../../../assets/classes-6.jpg'
// import yoga from '../../../assets/yoga.jpg'


// const FotnessoHeader = () => {
//     const [activeSlide, setActiveSlide] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveSlide((prev) => (prev + 1) % 4);
//         }, 5000); // Changes slide every 5 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <>
//             <header className="header">
//                 <div className="slider">
//                     <div className="slide">
//                         <img src={yoga} alt="Slide 1" />
//                     </div>
//                     <div className="slide">
//                         <img src={classes1} alt="Slide 2" />
//                     </div>
//                     <div className="slide">
//                         <img src={classes3} alt="Slide 3" />
//                     </div>
//                     <div className="slide">
//                         <img src={classes6} alt="Slide 4" />
//                     </div>
//                 </div>

//                 <div className="text-overlay">
//                     <div className="welcome-text">Welcome to</div>
//                     <div className="brand-name">Fitnesso</div>
//                     <div className="tagline">Experience Excellence in Every Detail</div>
//                     <a href="#" className="cta-button">Get Started</a>
//                 </div>

//                 <div className="slide-indicators">
//                     {[0, 1, 2, 3].map((index) => (
//                         <div
//                             key={index}
//                             className={`indicator ${index === activeSlide ? 'active' : ''}`}
//                             onClick={() => setActiveSlide(index)}
//                         />
//                     ))}
//                 </div>
//             </header>
//         </>
//     );
// };

// export default FotnessoHeader;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FotnessoHeader.css';
import classes3 from '../../../assets/classes-3.jpg';
import classes2 from '../../../assets/classes-2.jpg';
import classes1 from '../../../assets/classes-1.jpg';
import classes6 from '../../../assets/classes-6.jpg';
import yoga from '../../../assets/yoga.jpg';

const FotnessoHeader = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % 4);
        }, 5000); // Changes slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <header className="headerss">
                <div className="sliderss">
                    <div className="slidess">
                        <img src={yoga} alt="Slide 1" />
                    </div>
                    <div className="slidess">
                        <img src={classes1} alt="Slide 2" />
                    </div>
                    <div className="slidess">
                        <img src={classes3} alt="Slide 3" />
                    </div>
                    <div className="slidess">
                        <img src={classes6} alt="Slide 4" />
                    </div>
                </div>

                <div className="text-overlayss">
                    <div className="welcome-textss">Welcome to</div>
                    <div className="brand-namess">Fitnesso</div>
                    <div className="tagliness">Experience Excellence in Every Detail</div>
                    <Link to="/Tutors" className="cta-buttonss">Get Started</Link>
                </div>

                <div className="slide-indicatorss">
                    {[0, 1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className={`indicator ${index === activeSlide ? 'active' : ''}`}
                            onClick={() => setActiveSlide(index)}
                        />
                    ))}
                </div>
            </header>
        </>
    );
};

export default FotnessoHeader;