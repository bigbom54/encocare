import { Link } from '@inertiajs/react';
import Button from '@/components/common/Button/Button';
import SocialButton from '@/components/common/SocialButton/SocialButton';
import FormDivider from '@/components/common/FormDivider/FormDivider';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';

const SignupStep1 = ({ handleNextStep }) => {
    return (
        <>
            <p>Sign Up as a business!</p>
            <div className="social-buttons">
                <SocialButton type="facebook" title="Sign up using Facebook" />
                <SocialButton type="google" title="Sign up using Google" />
                <SocialButton type="twitter" title="Sign up using Twitter" />
            </div>
            <FormDivider />
            <form className="step1-from">
                <div className="input-wrapper">
                    <NormalInput placeHolder="Email Address" />
                    <PasswordInput placeHolder="Password" />
                </div>
                <Button title="Create Business Account" type="primary" onClick={handleNextStep} arrow />
            </form>
            <div className="link-wrapper">
                <p>Business</p>
                <Link href="/login-business">Login</Link>
            </div>
            <p className="policy">
                By signing up you agree to Encocare <span>terms & conditions</span> and privacy policy.
            </p>
        </>
    );
};

export default SignupStep1;
