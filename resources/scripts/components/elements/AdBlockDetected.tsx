import React from 'react';
import { Button } from '@/components/elements/button/index';


const AdBlockDetectedFrame = () => {
    function refreshPage() {
        window.location.reload();
    }
    return(
        <div className='flex flex-col text-center justify-center items-center'>
            <div>
               Weve Detected your using an adblocker 
            </div>
            <div>
                Please disable it to continue using our services
            </div>
            <Button  onClick={refreshPage}  className={' mt-4'}>I understand, Ive turned it off.</Button>
        </div>
    )
};

export default AdBlockDetectedFrame;

