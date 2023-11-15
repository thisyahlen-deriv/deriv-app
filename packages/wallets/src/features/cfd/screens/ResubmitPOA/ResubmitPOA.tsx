import React, { useState } from 'react';
import { useSettings, useStatesList } from '@deriv/api';
import { InlineMessage, WalletDropdown, WalletText, WalletTextField } from '../../../../components/Base';
import './ResubmitPOA.scss';

const ResubmitPOA: React.FC = () => {
    const { data } = useSettings();
    const country = data?.country_code || '';
    const { data: statesList } = useStatesList(country);

    const [selectedState, setSelectedState] = useState('');

    const handleSelect = (value: string) => {
        setSelectedState(value);
    };

    return (
        <div className='wallets-resubmit-poa'>
            <div className='wallets-resubmit-poa__address'>
                <div className='wallets-resubmit-poa__address__label'>
                    <WalletText weight='bold'>Address</WalletText>
                    <div className='wallets-resubmit-poa__address__divider' />
                </div>
                <div className='wallets-resubmit-poa__address__inline'>
                    <InlineMessage size='md' type='warning' variant='contained'>
                        <div className='wallets-resubmit-poa__address__inline--message'>
                            For faster verification, input the same address here as in your proof of address document
                            (see section below)
                        </div>
                    </InlineMessage>
                </div>
                <div className='wallets-resubmit-poa__address__input'>
                    <WalletTextField label='First line of address*' maxWidth='84rem' />
                    <WalletTextField label='Second line of address' maxWidth='84rem' />
                    <WalletTextField label='Town/City*' maxWidth='84rem' />
                    <WalletDropdown
                        label='State/Province'
                        list={statesList}
                        listHeight='sm'
                        maxWidth='84rem'
                        onSelect={handleSelect}
                        value={selectedState}
                    />
                    <WalletTextField label='Postal/ZIP Code' maxWidth='84rem' />
                </div>
            </div>
        </div>
    );
};

export default ResubmitPOA;
