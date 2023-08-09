import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WalletTransferBlock from '../wallet-transfer-block';
import { TWalletAccount } from 'Types';
import { StoreProvider, mockStore } from '@deriv/stores';

const wallet_account: TWalletAccount = {
    currency: 'USD',
    icon: '',
    balance: 10415.24,
    landing_company_name: 'svg',
    is_disabled: 0,
    is_virtual: 0,
    loginid: 'CRW10001',
    is_selected: false,
    is_demo: false,
    wallet_currency_type: '',
    is_malta_wallet: false,
    gradient_header_class: 'wallet-header__test',
    gradient_card_class: 'wallet-card__test',
    currency_config: undefined,
    linked_to: [{ loginid: 'CR1001', platform: 'dtrade' }],
};

jest.mock('./../../containers/currency-switcher-container', () => jest.fn(({ children }) => <div>{children}</div>));

jest.mock('@deriv/hooks', () => ({
    ...jest.requireActual('@deriv/hooks'),
    useTradingAccountsList: jest.fn(() => ({
        data: [{ account_category: 'trading', currency: 'USD', balance: 1000, loginid: 'CR1001' }],
    })),
    useWalletsList: jest.fn(() => ({
        data: [
            {
                currency: 'USD',
                icon: '',
                balance: 10415.24,
                landing_company_name: 'svg',
                is_disabled: 0,
                is_virtual: 0,
                loginid: 'CRW10001',
                is_selected: false,
                is_demo: false,
                wallet_currency_type: '',
                is_malta_wallet: false,
                gradient_header_class: 'wallet-header__test',
                gradient_card_class: 'wallet-card__test',
                currency_config: undefined,
                linked_to: [{ loginid: 'CR1001', platform: 'dtrade' }],
            },
        ],
    })),
}));

const mockedRootStore = mockStore({
    modules: {
        cfd: {
            toggleCompareAccountsModal: jest.fn(),
        },
    },
});

describe('<WalletTransferBlock />', () => {
    it('Check balance', () => {
        render(
            <StoreProvider store={mockedRootStore}>
                <WalletTransferBlock wallet_account={wallet_account} />
            </StoreProvider>
        );
        const balance_title = screen.queryByText('1,000.00 USD');

        expect(balance_title).toBeInTheDocument();
    });

    it('Check loginid', () => {
        render(
            <StoreProvider store={mockedRootStore}>
                <WalletTransferBlock wallet_account={wallet_account} />
            </StoreProvider>
        );
        const loginid_title = screen.queryByText('CR1001');

        expect(loginid_title).toBeInTheDocument();
    });
});
