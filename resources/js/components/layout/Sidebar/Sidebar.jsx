import { Fragment, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    sidebarToggleIcon,
    blockIcon,
    dashboardIcon,
    doctorIcon,
    governmentIcon,
    hospitalIcon,
    laboratoryIcon,
    messageIcon,
    plusCircleIcon,
    userCircleIcon,
    securityIcon,
    entityIcon,
    membershipIcon,
    userIcon,
    linkIcon,
    userSettingIcon,
} from '@/components/icons/sidebar';
import { rightArrowIcon, rightArrowIcon3 } from '@/components/icons/common';
import './Sidebar.scss';

const adminLinks = [
    {
        title: 'YOUR DASHBOARD',
        children: [
            {
                title: 'My Dashboard',
                icon: dashboardIcon,
                link: '/admin/dashboard',
            },
        ],
    },
    {
        title: 'YOUR ENTITIES',
        children: [
            {
                title: 'All Entities',
                icon: entityIcon,
                link: '/admin/entity/all',
            },
            {
                title: 'Governments',
                icon: governmentIcon,
                link: '/admin/entity/government',
            },
            {
                title: 'Hospitals',
                icon: hospitalIcon,
                link: '/admin/entity/hospitals',
            },
            {
                title: 'Laboratories',
                icon: laboratoryIcon,
                link: '/admin/entity/laboratories',
            },
            {
                title: 'Doctors',
                icon: doctorIcon,
                link: '/admin/entity/doctors',
            },
        ],
    },
    {
        title: 'ENTITY MANAGEMENT',
        children: [
            {
                title: 'Add an Entity',
                icon: plusCircleIcon,
                link: '/admin/entity/add',
            },
            {
                title: 'Remove/Block Entity',
                icon: blockIcon,
                link: '/admin/remove_block_entity',
            },
        ],
    },
    {
        title: 'SETTINGS',
        children: [
            {
                title: 'Account Settings',
                icon: userCircleIcon,
                link: '/admin/setting',
            },
            {
                title: 'Security Settings',
                icon: securityIcon,
                link: '/admin/security',
            },
        ],
    },
    {
        title: 'MY PROFILE',
        children: [
            {
                title: 'Message',
                icon: messageIcon,
                link: '/admin/message',
            },
        ],
    },
];

const individualLinks = [
    {
        title: 'YOUR DASHBOARD',
        children: [
            {
                title: 'My Dashboard',
                icon: dashboardIcon,
                link: '/individual/dashboard',
            },
        ],
    },
    {
        title: 'PATIENTS DATABASE',
        children: [
            {
                title: 'All Patients',
                icon: userIcon,
                link: '/individual/patient',
            },
        ],
    },
    {
        title: 'TESTING',
        children: [
            {
                title: 'Conduct a test',
                icon: plusCircleIcon,
                link: '/individual/conduct-test',
            },
            {
                title: 'Share referral link',
                icon: linkIcon,
                link: '/individual/share-link',
            },
        ],
    },
    {
        title: 'SETTINGS',
        children: [
            {
                title: 'Account Settings',
                icon: userCircleIcon,
                link: '/individual/setting',
            },
            {
                title: 'Security Settings',
                icon: securityIcon,
                link: '/individual/security-setting',
            },
            {
                title: 'Membership',
                icon: membershipIcon,
                link: '/individual/membership',
            },
        ],
    },
    {
        title: 'MY PROFILE',
        children: [
            {
                title: 'Message',
                icon: messageIcon,
                link: '/individual/message',
            },
        ],
    },
];

const businessLinks = [
    {
        title: 'YOUR DASHBOARD',
        children: [
            {
                title: 'My Dashboard',
                icon: dashboardIcon,
                link: '/business/dashboard',
            },
        ],
    },
    {
        title: 'HOSPITALS',
        children: [
            {
                title: 'All Hospitals',
                icon: hospitalIcon,
                link: '/business/hospital',
            },
            {
                title: 'Add a Hospital',
                icon: plusCircleIcon,
                link: '/business/hospital/add',
            },
            {
                title: 'Remove/Block Hospital',
                icon: blockIcon,
                link: '/business/hospital/remove',
            },
        ],
    },
    {
        title: 'DOCTORS',
        children: [
            {
                title: 'All Doctors',
                icon: doctorIcon,
                link: '/business/doctor',
            },
            {
                title: 'Add a Doctor',
                icon: plusCircleIcon,
                link: '/business/doctor/add',
            },
            {
                title: 'Remove/Block Doctor',
                icon: blockIcon,
                link: '/business/doctor/remove',
            },
        ],
    },
    {
        title: 'MEDICAL TEAM',
        children: [
            {
                title: 'Add a team member',
                icon: plusCircleIcon,
                link: '/business/member/add',
            },
            {
                title: 'Manage Roles',
                icon: userSettingIcon,
                link: '/business/member/role',
            },
        ],
    },
    {
        title: 'SETTINGS',
        children: [
            {
                title: 'Account Settings',
                icon: userCircleIcon,
                link: '/business/setting',
            },
            {
                title: 'Security Settings',
                icon: securityIcon,
                link: '/business/security-setting',
            },
            {
                title: 'Membership',
                icon: membershipIcon,
                link: '/business/membership',
            },
        ],
    },
    {
        title: 'MY PROFILE',
        children: [
            {
                title: 'Message',
                icon: messageIcon,
                link: '/business/message',
            },
        ],
    },
];

const Sidebar = ({ type }) => {
    const [isMobileOpen, setMobileOpen] = useState(false);

    const { url } = usePage();

    let linkData = adminLinks;

    if (type == 'admin') {
        linkData = adminLinks;
    } else if (type == 'individual') {
        linkData = individualLinks;
    } else if (type == 'business') {
        linkData = businessLinks;
    }

    return (
        <>
            <aside className={isMobileOpen ? 'mobile-open' : ''}>
                <div className="main-title">
                    <p>ENTITY NAME</p>
                    <span>{rightArrowIcon3}</span>
                </div>
                <ul className="main-menu">
                    {linkData.map((item) => (
                        <Fragment key={item.title}>
                            {item.title === 'SETTINGS' && <div className="divider" />}
                            <li className="parent">{item.title}</li>
                            {item.children.map((child) => {
                                const linkClassName = url === child.link ? 'active' : '';

                                return (
                                    <li className="child" key={child.title}>
                                        <Link href={child.link} className={linkClassName}>
                                            <div>
                                                <span className="child-icon">{child.icon}</span>
                                                <span className="child-title">{child.title}</span>
                                            </div>
                                            <span>{rightArrowIcon}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </Fragment>
                    ))}
                </ul>
            </aside>
            <div className="sidebar-toggle-menu" onClick={() => setMobileOpen(!isMobileOpen)}>
                {sidebarToggleIcon}
            </div>
        </>
    );
};

export default Sidebar;
