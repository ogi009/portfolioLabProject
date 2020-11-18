import React, {useState} from 'react';
import FaArrowCircleUp from '../../assets/Icon-Arrow-Up.svg';
import '../../scss/_scrollarrow.scss';



const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <img src={FaArrowCircleUp} className="scrollTop" alt="oko" onClick={scrollTop} style={{height: "40px",width: "40px", display: showScroll ? 'flex' : 'none'}}/>
    );
}
export default ScrollArrow;