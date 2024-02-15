import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useAuthorize } from '@deriv/api';
import { Loader, PageLayout, VerticalTab, VerticalTabItems } from '@deriv-com/ui';
import { CashierLayout } from '../../components';
import type { TRouteTypes, TSideNotes } from '../../types';
import styles from './Cashier.module.scss';

const Cashier: React.FC<TRouteTypes.TRouteComponent> = ({ routes }) => {
    const [sideNotes, setSideNotes] = useState<TSideNotes>({
        notes: [],
        position: undefined,
    });
    const routesWithID = routes?.map(route => ({ ...route, id: route.path })) ?? [];
    const { isLoading } = useAuthorize();
    const history = useHistory();

    const onSelectItemHandler = (path: TRouteTypes.TRoutes) => history.push(path);

    if (isLoading) return <Loader />;

    return (
        <div className={styles.container}>
            <PageLayout
                sidebar={
                    <VerticalTab>
                        <VerticalTabItems
                            activeTab={history.location.pathname}
                            items={routesWithID}
                            //@ts-expect-error VerticalTabItems should have generic type for "id" prop and not limited to the type of string
                            onSelectItem={onSelectItemHandler}
                            should_have_panel={false}
                            wrapperClassName={styles['vertical-tab-wrapper']}
                        />
                    </VerticalTab>
                }
            >
                <CashierLayout sideNotes={sideNotes}>
                    <Switch>
                        {routes?.map(route => {
                            const { path, title } = route;
                            return (
                                <Route exact key={path} path={path}>
                                    <route.component path={path} setSideNotes={setSideNotes} title={title} />
                                </Route>
                            );
                        })}
                    </Switch>
                </CashierLayout>
            </PageLayout>
        </div>
    );
};

export default Cashier;
