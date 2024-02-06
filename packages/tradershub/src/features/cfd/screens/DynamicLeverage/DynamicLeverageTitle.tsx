import React from 'react';
import { useDynamicLeverageModalState } from '@cfd/components';
import { Text } from '@deriv/quill-design';
import { StandaloneArrowLeftBoldIcon } from '@deriv/quill-icons';

export const DynamicLeverageTitle = () => {
    const { toggleDynamicLeverage } = useDynamicLeverageModalState();

    return (
        <div className='flex items-center border-solid border-b-75 -mx-400 pb-600 pr-800 pl-1200 gap-800 h-14 border-system-light-secondary-background '>
            <StandaloneArrowLeftBoldIcon className='flex items-center cursor-pointer' onClick={toggleDynamicLeverage} />
            <Text bold size='md'>
                Get more out of Deriv MT5 Financial
            </Text>
        </div>
    );
};

export default DynamicLeverageTitle;
