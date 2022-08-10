import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { CFDAccountCard } from '../cfd-account-card';

const mock_connect_props = {
    dxtrade_tokens: {
        demo: '',
        real: '',
    },
};

jest.mock('Stores/connect.js', () => ({
    __esModule: true,
    default: 'mockedDefaultExport',
    connect: () => Component => props => Component({ ...props, ...mock_connect_props }),
}));

jest.mock('@deriv/components', () => {
    const original_module = jest.requireActual('@deriv/components');
    return {
        ...original_module,
        Icon: jest.fn(props => <div data-testid='mocked_icon'>{props.icon}</div>),
    };
});

const synthetic_descriptor = 'Trade CFDs on our synthetic indices that simulate real-world market movement.';
const financial_descriptor =
    'Trade major (standard & micro-lots) and minor forex, stocks & stock indices, commodities, basket indices, and crypto with high leverage.';

describe('CFDAccountCard', () => {
    const props = {
        button_label: 'Top up',
        commission_message: 'No commission',
        descriptor: '',
        dxtrade_tokens: {
            demo: '',
            real: '',
        },
        is_hovered: false,
        existing_accounts_data: [
            {
                account_type: 'demo',
                descriptor: '',
                balance: 10000,
                platform: 'mt5',
                display_balance: '10000.00',
                display_login: '20103240',
                email: 'name@domain.com',
                group: 'demo\\p01_ts02\\financial\\svg_std_usd',
                landing_company_short: 'svg',
                leverage: 1000,
                login: 'MTD20103240',
                market_type: 'financial',
            },
        ],
        has_banner: true,
        has_cfd_account: false,
        has_cfd_account_error: false,
        is_eu: true,
        has_real_account: false,
        is_accounts_switcher_on: false,
        is_button_primary: true,
        is_disabled: false,
        is_loading: false,
        is_logged_in: true,
        is_virtual: true,
        onHover: jest.fn(),
        specs: '',
        type: {},
        title: {},
        platform: 'mt5',
        onSelectAccount: jest.fn(),
        onClickFund: jest.fn(),
        onPasswordManager: jest.fn(),
        should_show_trade_servers: true,
        toggleAccountsDialog: jest.fn(),
        toggleShouldShowRealAccountsList: jest.fn(),
        isEligibleForMoreDemoMt5Svg: true,
        isEligibleForMoreRealMt5: true,
        toggleMT5TradeModal: jest.fn(),
        setMT5TradeAccount: jest.fn(),
    };

    it('should render the component for Demo MT5 Synthetic account ', () => {
        const type = {
            type: 'synthetic',
            category: 'demo',
            platform: 'mt5',
        };
        render(<CFDAccountCard {...props} type={type} descriptor={synthetic_descriptor} title='Synthetic' />);
        expect(screen.getByText(/most popular/i)).toBeInTheDocument();
        expect(screen.getByText(/demo/i)).toBeInTheDocument();
        expect(screen.getByText(/IcMt5CfdPlatform/i)).toBeInTheDocument();
        expect(screen.getAllByText(/synthetic/i)[0]).toBeInTheDocument();
        expect(
            screen.getByText(/trade cfds on our synthetic indices that simulate real-world market movement./i)
        ).toBeInTheDocument();
        expect(screen.getByText(/20103240/i)).toBeInTheDocument();
        expect(screen.getByText(/USD/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /top up/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /trade/i })).toBeInTheDocument();
    });

    it('should display the component for Demo MT5 Financial account ', () => {
        const type = {
            type: 'financial',
            category: 'demo',
            platform: 'mt5',
        };
        render(<CFDAccountCard {...props} type={type} descriptor={financial_descriptor} title='Financial' />);
        expect(screen.getByText(/demo/i)).toBeInTheDocument();
        expect(screen.getByText(/IcMt5CfdPlatform/i)).toBeInTheDocument();
        expect(screen.getAllByText(/financial/i)[0]).toBeInTheDocument();
        expect(
            screen.getByText(
                /trade major \(standard & micro-lots\) and minor forex, stocks & stock indices, commodities, basket indices, and crypto with high leverage./i
            )
        ).toBeInTheDocument();
        expect(screen.getByText(/20103240/i)).toBeInTheDocument();
        expect(screen.getByText(/USD/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /top up/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /trade/i })).toBeInTheDocument();
    });

    it('should render the account card if the user has a Real MT5 Synthetic account', () => {
        const type = {
            type: 'synthetic',
            category: 'real',
            platform: 'mt5',
        };
        render(<CFDAccountCard {...props} type={type} descriptor={synthetic_descriptor} title='Synthetic' />);
        expect(screen.getByText(/most popular/i)).toBeInTheDocument();
        expect(screen.getByText(/IcMt5CfdPlatform/i)).toBeInTheDocument();
        expect(screen.getAllByText(/synthetic/i)[0]).toBeInTheDocument();
        expect(
            screen.getByText(/trade cfds on our synthetic indices that simulate real-world market movement./i)
        ).toBeInTheDocument();
        expect(screen.getByText(/mfsa/i)).toBeInTheDocument();
        expect(screen.getByText(/20103240/i)).toBeInTheDocument();
        expect(screen.getByText(/USD/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /top up/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /trade/i })).toBeInTheDocument();
    });

    it('should render the account card if the user has a Real MT5 Financial account', () => {
        const type = {
            type: 'financial',
            category: 'real',
            platform: 'mt5',
        };
        render(<CFDAccountCard {...props} type={type} descriptor={financial_descriptor} title='Financial' />);
        expect(screen.getByText(/mfsa/i)).toBeInTheDocument();
        expect(screen.getByText(/IcMt5CfdPlatform/i)).toBeInTheDocument();
        expect(screen.getAllByText(/financial/i)[0]).toBeInTheDocument();
        expect(
            screen.getByText(
                /trade major \(standard & micro-lots\) and minor forex, stocks & stock indices, commodities, basket indices, and crypto with high leverage./i
            )
        ).toBeInTheDocument();
        expect(screen.getByText(/20103240/i)).toBeInTheDocument();
        expect(screen.getByText(/USD/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /top up/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /trade/i })).toBeInTheDocument();
    });

    it('should call onClickFund when top up button is clicked', () => {
        const type = {
            type: 'financial',
            category: 'real',
            platform: 'mt5',
        };
        render(<CFDAccountCard {...props} type={type} descriptor={financial_descriptor} title='Financial' />);
        fireEvent.click(screen.getByRole('button', { name: /top up/i }));
        expect(props.onClickFund).toHaveBeenCalled();
    });

    it('should call toggleMT5TradeModal when trade button is clicked', () => {
        const type = {
            type: 'financial',
            category: 'real',
            platform: 'mt5',
        };
        render(<CFDAccountCard {...props} type={type} descriptor={financial_descriptor} title='Financial' />);
        fireEvent.click(screen.getByRole('button', { name: /trade/i }));
        expect(props.toggleMT5TradeModal).toHaveBeenCalled();
    });
});
