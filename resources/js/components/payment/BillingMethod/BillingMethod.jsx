import PaymentSelect from '../../common/PaymentSelect/PaymentSelect';
import './BillingMethod.scss';

const BillingMethod = ({ handleMethod }) => {
    return (
        <div className="billing-method">
            <h2>Billing Method</h2>
            <PaymentSelect onChange={handleMethod} />
            <p>Can't find your payment method?</p>
        </div>
    );
};

export default BillingMethod;
