import { Link } from '@inertiajs/react';
import Button from '@/components/common/Button/Button';
import Dropzone from '@/components/common/Dropzone/Dropzone';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import { imageIcon, leftArrowIcon2, userIcon } from '@/components/icons/common';
import { hospitalIcon } from '@/components/icons/sidebar';
import './AddTeamMember.scss';
import BusinessLayout from '@/layout/BusinessLayout/BusinessLayout';

const roles = [
    {
        title: 'Admin',
        desc: 'Full Access to manage, edit, delete accounts. ',
        checked: true,
    },
    {
        title: 'Manager',
        desc: 'Limited Access: Manage, Edit accounts. ',
        checked: false,
    },
    {
        title: 'Editor',
        desc: 'Limited Access: View accounts. ',
        checked: false,
    },
];

const AddTeamMember = ({ auth }) => {
    return (
        <BusinessLayout auth={auth}>
            <div className="add-team-member">
                <div className="main-header">
                    <h1>
                        <span>{leftArrowIcon2}</span>Add an TeamMember
                    </h1>
                    <p>Admin can add and assign roles to medical team members here!</p>
                </div>

                <div className="main-content">
                    <div className="card-wrapper">
                        <div className="card first-card">
                            <div className="card-title">
                                <span className="hospital-icon">{hospitalIcon}</span>
                                MEMBER DETAILS
                            </div>

                            <NormalInput placeHolder="Member name" />
                            <NormalInput placeHolder="Member Location" />
                            <NormalInput placeHolder="Member Contact Number" />
                        </div>
                        <div className="card third-card">
                            <div className="card-title">
                                <span>{imageIcon}</span>
                                UPLOAD PROFILE IMAGE
                            </div>

                            <Dropzone />
                        </div>
                        <div className="card second-card">
                            <div className="card-title">
                                <span>{userIcon}</span>
                                ASSIGN ROLE
                            </div>

                            <div className="choose-wrapper">
                                {roles.map((item) => (
                                    <div key={item.title} className={`choose-item ${item.checked ? 'active' : ''}`}>
                                        <CheckBox checked={item.checked} readonly />
                                        <div className="choose-item-text">
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <Button title="Save" type="primary" />
                        <Link href="/">{leftArrowIcon2} Back</Link>
                    </div>
                </div>
            </div>
        </BusinessLayout>
    );
};

export default AddTeamMember;
