import { useState } from 'react';
import Button from '../../common/Button/Button';
import { cameraIcon, soundIcon } from '@/components/icons/common';
import cameraImage from '../../../../images/camera.png';
import './Camera.scss';

const Camera = ({ onNext, onPrev }) => {
    const [step, setStep] = useState(0);

    const handleCamera = () => {
        setStep(1);

        setTimeout(() => {
            onNext();
        }, 2000);
    };

    return (
        <div className="camera">
            <h1>Bring your right eye close the camera</h1>
            <p>
                Press the start analysis button and bring your right eye close to the camera. You'll hear{' '}
                <br className="desktop-only" />a beep sound once the test is done!
            </p>

            <div className="camera-wrapper">
                <video src=""></video>
                {step === 1 && <img src={cameraImage} alt="" />}
                <div className="overlay">
                    <span>{cameraIcon}</span>
                    <h1>Allow Camera Access</h1>
                    <p>
                        Encore needs to access your camera to continue with the test. <br className="desktop-only" />
                        Please read our <span>privacy policy</span> for details.
                    </p>
                    <Button title="Allow Access" type="green" onClick={handleCamera} />
                </div>
            </div>

            <div className="audio-wrapper">
                <p>
                    Audio Guide: <span>{soundIcon}</span>ON
                </p>
            </div>
        </div>
    );
};

export default Camera;
