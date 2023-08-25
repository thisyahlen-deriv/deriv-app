import React from 'react';
import useFetch from '../useFetch';
import useWalletAccountsList from './useWalletAccountsList';
import useAuthorize from './useAuthorize';
import useCurrencyConfig from './useCurrencyConfig';

const useAvailableWallets = () => {
    const { data } = useAuthorize();
    const { data: account_type_data, ...rest } = useFetch('get_account_types', {
        payload: {
            // This is temporary fix, will be changed by BE
            company: data?.landing_company_name === 'virtual' ? 'svg' : data?.landing_company_name,
        },
        options: { enabled: Boolean(data?.landing_company_name) },
    });

    const { data: added_wallets } = useWalletAccountsList();
    const { getConfig } = useCurrencyConfig();

    const sortedWallets = React.useMemo(() => {
        if (!account_type_data) return undefined;
        const { crypto, doughflow } = account_type_data?.get_account_types?.wallet || {};
        const crypto_currencies = crypto?.currencies;
        const fiat_currencies = doughflow?.currencies;

        if (!crypto_currencies || !fiat_currencies) return undefined;
        const available_currencies = [...fiat_currencies, ...crypto_currencies];
        const non_virtual_wallets = added_wallets?.filter(wallet => !wallet.is_virtual);

        const modified_wallets = non_virtual_wallets?.map(wallet => ({
            currency: wallet.currency,
            landing_company_name: wallet.landing_company_name,
            is_added: true,
        }));

        const available_wallets = available_currencies
            .filter(currency => !modified_wallets?.some(wallet => wallet.currency === currency))
            .map(currency => ({
                currency,
                // This will also be changed by BE
                landing_company_name: data?.landing_company_name === 'virtual' ? 'svg' : data?.landing_company_name,
                is_added: false,
            }));

        const getConfigIsCrypto = (currency: string) => getConfig(currency)?.is_crypto;

        // Sort the unadded wallets alphabetically by fiat, crypto, then virtual
        available_wallets.sort((a, b) => {
            const a_config = getConfigIsCrypto(a.currency);
            const b_config = getConfigIsCrypto(b.currency);

            if (a_config !== b_config) return a.currency ? 1 : -1;

            return (a.currency || 'USD').localeCompare(b.currency || 'USD');
        });

        // Sort the added wallets alphabetically by fiat, crypto, then virtual (if any)
        if (Array.isArray(modified_wallets)) {
            modified_wallets?.sort((a, b) => {
                const a_config = getConfigIsCrypto(a.currency || 'BTC');
                const b_config = getConfigIsCrypto(b.currency || 'BTC');
                if (a_config !== b_config) return a_config ? 1 : -1;

                return (a.currency || 'USD').localeCompare(b.currency || 'USD');
            });
        }

        return [...available_wallets];
    }, [added_wallets, account_type_data, data?.landing_company_name, getConfig]);

    return {
        ...rest,
        /** Sorted available wallets */
        data: sortedWallets,
    };
};

export default useAvailableWallets;
