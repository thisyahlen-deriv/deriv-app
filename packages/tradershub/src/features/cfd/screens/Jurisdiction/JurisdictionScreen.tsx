import React, { Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useCFDContext } from '@/providers';
import { useDynamicLeverageModalState } from '@cfd/components';
import { Jurisdiction } from '@cfd/constants';
import { useAvailableMT5Accounts, useMT5AccountsList } from '@deriv/api';
import { THooks } from '../../../../types';
import { JurisdictionCard } from './JurisdictionCard';

type TJurisdictionScreenProps = {
    selectedJurisdiction: THooks.AvailableMT5Accounts['shortcode'];
    setIsCheckBoxChecked: Dispatch<SetStateAction<boolean>>;
    setSelectedJurisdiction: Dispatch<SetStateAction<string>>;
};

const JurisdictionScreen = ({
    selectedJurisdiction,
    setIsCheckBoxChecked,
    setSelectedJurisdiction,
}: TJurisdictionScreenProps) => {
    const { cfdState } = useCFDContext();
    const { data: availableMT5Accounts } = useAvailableMT5Accounts();
    const { data: mt5AccountsList } = useMT5AccountsList();
    const { marketType } = cfdState;
    const { isDynamicLeverageVisible } = useDynamicLeverageModalState();
    const jurisdictions = useMemo(
        () =>
            availableMT5Accounts
                ?.filter(account => account.market_type === marketType)
                .map(account => account.shortcode) ?? [],
        [availableMT5Accounts, marketType]
    );
    const addedJurisdictions = useMemo(
        () =>
            mt5AccountsList
                ?.filter(account => account.market_type === marketType && !account.is_virtual)
                .map(account => account.landing_company_short) ?? [],
        [marketType, mt5AccountsList]
    );

    useEffect(() => {
        setIsCheckBoxChecked(false);
    }, [selectedJurisdiction, setIsCheckBoxChecked]);

    return (
        <div
            className={twMerge(
                `flex flex-col w-full p-16 items-center justify-between transition-all ease-in duration-[0.6s] sm:p-40`,
                isDynamicLeverageVisible &&
                    '[transform:rotateY(-180deg)] h-[700px] opacity-0 bg-system-light-primary-background'
            )}
        >
            <div className='flex flex-col items-stretch justify-center w-full gap-16 py-0 lg:flex-row'>
                {jurisdictions.map(jurisdiction => (
                    <JurisdictionCard
                        isAdded={addedJurisdictions.includes(jurisdiction as typeof addedJurisdictions[number])}
                        isSelected={selectedJurisdiction === jurisdiction}
                        jurisdiction={jurisdiction ?? Jurisdiction.BVI}
                        key={jurisdiction}
                        onSelect={clickedJurisdiction => {
                            if (clickedJurisdiction === selectedJurisdiction) {
                                setSelectedJurisdiction('');
                            } else {
                                setSelectedJurisdiction(clickedJurisdiction);
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default JurisdictionScreen;
