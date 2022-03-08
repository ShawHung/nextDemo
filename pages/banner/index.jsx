import Image from "next/image";
import Aj from '../../assets/images/Aj.svg';
import NikeBox from '../../assets/images/nikebox.svg';
import NikeFreeTrainer from '../../assets/images/NikeFreeTrainer30MMW.svg';


const Banner = () => {
    return <div className="banner">
           <Image
                src={Aj}
                alt='my banner'
                layout="intrinsic"
                className="img"
           />
           <Image
                src={NikeBox}
                alt='my banner'
                layout="intrinsic"
                className="img"
           />
           <Image
                src={NikeFreeTrainer}
                alt='my banner'
                layout="intrinsic"
                className="img"
           />
        </div>
}

export default Banner;