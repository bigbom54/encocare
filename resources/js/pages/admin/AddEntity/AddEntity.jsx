import { Link } from '@inertiajs/react';
import AdminLayout from '@/layout/AdminLayout/AdminLayout';
import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import Dropzone from '@/components/common/Dropzone/Dropzone';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import Select from '@/components/common/Select/Select';
import { imageIcon, leftArrowIcon2, lockIcon, userIcon } from '@/components/icons/common';
import { hospitalIcon } from '@/components/icons/sidebar';
import './AddEntity.scss';

const AddEntity = ({ auth }) => {
    return (
        <AdminLayout auth={auth}>
            <div className="add-entity">
                <div className="main-header">
                    <h1>
                        <span>{leftArrowIcon2}</span>Add an Entity
                    </h1>
                    <p>An an entity to add in your dashboard!</p>
                </div>

                <div className="main-content">
                    <div className="card-wrapper">
                        <div className="card first-card">
                            <div className="card-title">
                                <span className="hospital-icon">{hospitalIcon}</span>
                                ENTITY DETAILS
                            </div>

                            <Select options={['Test']} placeHolder="Entity Type" />
                            <NormalInput placeHolder="Entity name" />
                            <NormalInput placeHolder="Entity Location" />
                            <NormalInput placeHolder="Entity Contact Number" />
                        </div>
                        <div className="card second-card">
                            <div className="card-title">
                                <span>{userIcon}</span>
                                ASSIGN ADMIN
                            </div>

                            <div className="name-wrapper">
                                <NormalInput placeHolder="First Name" />
                                <NormalInput placeHolder="Last Name" />
                            </div>
                            <NormalInput placeHolder="Entity name" />
                            <NormalInput placeHolder="Entity Location" />
                            <NormalInput placeHolder="Entity Contact Number" />
                        </div>
                        <div className="card third-card">
                            <div className="card-title">
                                <span>{imageIcon}</span>
                                UPLOAD PROFILE IMAGE
                            </div>

                            <Dropzone />
                        </div>
                        <div className="card fourth-card">
                            <div className="card-title">
                                <span className="lock-icon">{lockIcon}</span>
                                ACCOUNT SECURITY
                            </div>

                            <PasswordInput placeHolder="Enter Password" />
                            <PasswordInput placeHolder="Reenter Password" />

                            <div className="check-wrapper">
                                <div>
                                    <CheckBox />
                                    Allow access with OTP
                                </div>
                                <div>
                                    <CheckBox />
                                    Allow Multiple Logins
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <Button title="Save" type="primary" />
                        <Link href="/admin/dashboard">{leftArrowIcon2} Back</Link>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AddEntity;
