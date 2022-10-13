import * as React from 'react';
import Joyride from 'react-joyride';
import ToggleAccountType from 'Components/toggle-account-type';
import { tour_step_config, tour_styles, tour_step_locale, tour_styles_dark_mode } from 'Constants/tour-steps-config';
import { observer } from 'mobx-react-lite';
import { useStores } from 'Stores';
import CFDAccounts from 'Components/CFDs';
import { TAccountCategory } from 'Types';
import { Localize, localize } from '@deriv/translations';
import { Button, Text } from '@deriv/components';
import { useHistory } from 'react-router-dom';
import { routes } from '@deriv/shared';
import TotalAssets from 'Components/total-assets';
import './index.scss';

const TradingHub = () => {
    const { ui } = useStores();
    const { is_dark_mode_on, is_tour_open, toggleIsTourOpen } = ui;
    const history = useHistory();
    /*TODO: We need to show this component whenever user click on tour guide button*/
    const [account_type, setAccountType] = React.useState<TAccountCategory>('demo');

    const accountTypeChange = (event: any) => {
        setAccountType(event.target.value);
    };

    tour_step_locale.last = (
        <Localize
            i18n_default_text='OK'
            onClick={() => {
                toggleIsTourOpen();
            }}
        />
    );

    tour_step_locale.back = (
        <Button
            has_effect
            text={localize('Repeat tour')}
            secondary
            medium
            onClick={() => {
                history.push(routes.onboarding);
                toggleIsTourOpen();
            }}
        />
    );

    return (
        <React.Fragment>
            <div className='trading-hub__header'>
                <div className='trading-hub__header--title'>
                    <Text as='h5' size='m' color='general' line_height='xs' weight='bold'>
                        <Localize i18n_default_text='Welcome to Deriv Trading Hub' />
                    </Text>
                </div>
                <div className='trading-hub__header--right'>
                    <div className='trading-hub__header-right--account-toggle'>
                        <TotalAssets amount='100000' currency='USD' category={account_type} />
                        <ToggleAccountType
                            accountTypeChange={(event: any) => accountTypeChange(event)}
                            value={account_type}
                        />
                    </div>
                </div>
            </div>

            <div className='trading-hub__body'>
                <CFDAccounts account_type={account_type} />
            </div>
            <Joyride
                run={is_tour_open}
                continuous
                disableScrolling
                hideCloseButton
                disableCloseOnEsc
                steps={tour_step_config}
                styles={is_dark_mode_on ? tour_styles_dark_mode : tour_styles}
                locale={tour_step_locale}
                floaterProps={{
                    disableAnimation: true,
                }}
            />
        </React.Fragment>
    );
};

export default observer(TradingHub);
