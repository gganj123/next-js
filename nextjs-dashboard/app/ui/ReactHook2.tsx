import { useEffect,useState } from "react";
import Highlight from '../component/Highlight';


function UseEffectPage({ }){
    const [isClient, setIsClient] = useState(false);

    useEffect(()=>{
     setIsClient(true);
    },[]);

return (
    <div>
        {isClient &&
            (<Highlight
                code={"console.log('Hello, world!')"}
                language='js'
                />)
            }
        </div>
    );
}

export default UseEffectPage;
