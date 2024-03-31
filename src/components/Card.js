import { FaLocationDot } from "react-icons/fa6";


function Card(props){
    let event = props.event;
    let urlSplit = event.imgUrl.split('/');
    let id = urlSplit[5];

    return (
        <div className=" flex-wrap w-[25%] border border-[#B0BABF] rounded-lg justify-between pt-2">
            {/* Image waala div */}
            <div className=" flex-wrap pt-2">
                <img src={`https://drive.google.com/thumbnail?id=${id}&sz=w300`} alt="Banner"/>
            </div>

            {/* Description DIV */}
            <div className="w-full px-4 text-start pb-4">
                <div className="text-left text-1g font-bold text-[#1E2022]">
                    After note nearly
                </div>
                <div className="flex items-center justify-between text-[#989090] ">
                    <div className="flex items-center">
                        <div>
                            <FaLocationDot />
                        </div>
                        <p>West Douglas</p>
                    </div>
                    <div>
                        Snowy, 26°C | 42Km
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;