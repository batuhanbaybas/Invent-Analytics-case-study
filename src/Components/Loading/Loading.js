import Lottie from "react-lottie";
import loadingAnimation from "../../Assets/Animations/Loading/95888-pulse-heart-beat-loading-animation.json"


const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
    };

    return (
        <div className={"d-flex justify-content-center align-items-center"}>
            <div className={"w-25 h-25"}>
                <Lottie options={defaultOptions}/>
            </div>
        </div>
    )
}

export default Loading