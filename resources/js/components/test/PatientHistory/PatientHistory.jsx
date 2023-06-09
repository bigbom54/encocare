import Button from '../../common/Button/Button';
import CheckBox from '../../common/CheckBox/CheckBox';
import MultiSelect from '../../common/MultiSelect/MultiSelect';
import companyImage from '../../../../images/company.png';
import './PatientHistory.scss';

const options = ['Age Related Macular Degeneration', 'Cataract', 'Test'];

const PatientHistory = ({ onNext, onPrev }) => {
    return (
        <div className="patient-history">
            <h1>Patient History</h1>

            <div className="input-wrapper">
                <p>Do you have any known eye condition?</p>
                <div className="choose-wrapper">
                    <div className="choose-item">
                        <CheckBox /> <span>Yes</span>
                    </div>
                    <div className="choose-item">
                        <CheckBox /> <span>No</span>
                    </div>
                </div>

                <p>Please select your eye condition!</p>
                <MultiSelect options={options} defaultValue={[0, 1]} placeHolder="Search for a condition " />
            </div>

            <Button title="Continue" type="primary" onClick={onNext} arrow />
            <span onClick={onPrev}>Back</span>

            <div className="company-badge">
                <img src={companyImage} alt="" />
            </div>
        </div>
    );
};

export default PatientHistory;
