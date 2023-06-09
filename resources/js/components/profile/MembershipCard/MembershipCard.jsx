import { Link } from '@inertiajs/react';
import {
    checkCircleIcon,
    checkIcon,
    crossCircleIcon,
    crossIcon,
    fireIcon,
    rightArrowIcon2,
} from '@/components/icons/common';
import './MembershipCard.scss';

const contentList = [
    { title: '20 Tests/Month', check: true },
    { title: 'PDF and Electronic Reports', check: true },
    { title: 'Free Consultation', check: true },
    { title: 'Enterprise Access', check: false },
    { title: 'Unlimited Cloud Storage', check: false },
];

const MembershipCard = ({ title, primaryColor, secondColor, iconType, popular, price }) => {
    return (
        <div className="membership-card">
            <div className="card-header" style={{ backgroundColor: secondColor }}>
                <h1>{title} Plain</h1>
                <p className="price-title">
                    <span style={{ color: primaryColor }}>$</span>
                    <span style={{ color: primaryColor }}>{price}</span>
                    <span>/month</span>
                </p>
                <p className="bill-title">Billed Annually</p>
            </div>
            <div className="card-content">
                {contentList.map((item) => {
                    let icon;
                    if (iconType == 'circle') {
                        icon = item.check ? checkCircleIcon : crossCircleIcon;
                    } else {
                        icon = item.check ? checkIcon : crossIcon;
                    }

                    return (
                        <div className="card-child-item" key={item.title} data-type={item.check}>
                            <span>{icon}</span>
                            {item.title}
                        </div>
                    );
                })}
                <div className="subscribe-mobile" style={{ backgroundColor: primaryColor }}>
                    Subscribe
                </div>
                <Link href="/">
                    Request more Information<span>{rightArrowIcon2}</span>
                </Link>
            </div>
            <Link href="/profile/membership/payment">
                <div className="card-footer" style={{ backgroundColor: primaryColor }}>
                    Subscribe
                </div>
            </Link>
            {popular && (
                <div className="popular" style={{ backgroundColor: primaryColor }}>
                    <span>{fireIcon}</span>
                    Popular
                </div>
            )}
        </div>
    );
};

export default MembershipCard;
