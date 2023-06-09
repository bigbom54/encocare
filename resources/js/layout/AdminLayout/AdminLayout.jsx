import Header from '@/components/layout/Header/Header';
import Navbar from '@/components/layout/Navbar/Navbar';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import './AdminLayout.scss';

const AdminLayout = ({ auth, children }) => {
    return (
        <>
            <header data-layout="admin">
                <Header />
                <Navbar mode="admin" auth={auth} />
            </header>
            <main data-layout="admin">
                <Sidebar type="admin" />
                <div className="main-content">{children}</div>
            </main>
        </>
    );
};

export default AdminLayout;
