import React from 'react';
import { Text, StatusBadge } from '@deriv/components';
import { Localize, localize } from '@deriv/translations';
import { getStatusBadgeConfig } from '@deriv/account';
import { useStore, observer } from '@deriv/stores';
import { TWalletAccount } from 'Types';
import { formatMoney } from '@deriv/shared';

type TWalletHeaderBalance = Pick<TWalletAccount, 'balance' | 'currency'>;

const WalletHeaderBalance = observer(({ balance, currency }: TWalletHeaderBalance) => {
    const {
        traders_hub: { openFailedVerificationModal, multipliers_account_status, is_eu_user },
    } = useStore();

    const balance_amount = (
        <Text weight='bold' size='m' color='prominent'>
            <Localize
                i18n_default_text='{{balance}} {{currency}}'
                values={{
                    balance: formatMoney(currency, balance, true),
                    currency,
                }}
            />
        </Text>
    );

    // TODO: just for test use empty object. When BE will be ready it will be fixed
    const { text: badge_text, icon: badge_icon } = getStatusBadgeConfig(
        multipliers_account_status,
        openFailedVerificationModal,
        {
            platform: '',
            category: '',
            type: '',
            jurisdiction: '',
        }
    );

    return (
        <div className='wallet-header__balance-title-amount'>
            {multipliers_account_status && is_eu_user ? (
                <StatusBadge account_status={multipliers_account_status} icon={badge_icon} text={badge_text} />
            ) : (
                <React.Fragment>
                    <Text
                        key={0}
                        color='less-prominent'
                        size='xxs'
                        className='wallet-header__balance-title-amount-title'
                    >
                        {localize('Wallet balance')}
                    </Text>
                    {balance_amount}
                </React.Fragment>
            )}
        </div>
    );
});
export default WalletHeaderBalance;
