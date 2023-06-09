import { useState } from 'react';
import Button from '../Button/Button';
import { closeIcon } from '@/components/icons/common';
import { bottomDialogIcon1, bottomDialogIcon2, bottomDialogIcon3 } from '@/components/icons/dialog';
import './BottomDialog.scss';
import { router } from '@inertiajs/react';

const BottomDialog = () => {
    const [isDialogOpen, setDialogOpen] = useState(true);

    const handleTakeTest = () => {
        router.get('/test/agree');
    };

    return (
        <div className={`bottom-dialog ${isDialogOpen ? 'active' : ''}`}>
            <div className="button-wrapper">
                <Button title="Take a Test" type="primary" icon={bottomDialogIcon1} onClick={handleTakeTest} />
                <Button title="Find an Opthalmogist" type="outline" icon={bottomDialogIcon2} />
                <Button title="Find an Eye Test Center" type="outline" icon={bottomDialogIcon3} />
            </div>
            <span className="close" onClick={() => setDialogOpen(false)}>
                {closeIcon}
            </span>
        </div>
    );
};

export default BottomDialog;
