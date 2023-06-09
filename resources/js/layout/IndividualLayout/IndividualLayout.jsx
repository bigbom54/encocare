import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import './IndividualLayout.scss';

const IndividualLayout = ({ auth, children }) => {
    return (
        <>
            <header data-layout="individual">
                <Header />
                <Navbar mode="admin" auth={auth} />
            </header>
            <main data-layout="individual">
                <Sidebar type="individual" />
                <div className="main-content">{children}</div>
            </main>
        </>
    );
};

export default IndividualLayout;
