import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PasskeysList } from '../passkeys-list';
import { mock_passkeys_list } from '../../__tests__/passkeys.spec';

jest.mock('@deriv/shared', () => ({
    ...jest.requireActual('@deriv/shared'),
    getOSNameWithUAParser: () => 'test OS',
}));

describe('PasskeysList', () => {
    it('renders the passkeys and calls the correct function when the button is clicked', () => {
        const mockOnPrimaryButtonClick = jest.fn();
        const mockOnSecondaryButtonClick = jest.fn();
        const mockOnPasskeyMenuClick = jest.fn();

        render(
            <PasskeysList
                passkeys_list={mock_passkeys_list}
                onPrimaryButtonClick={mockOnPrimaryButtonClick}
                onSecondaryButtonClick={mockOnSecondaryButtonClick}
                onPasskeyMenuClick={mockOnPasskeyMenuClick}
            />
        );

        mock_passkeys_list.forEach(passkey => {
            expect(screen.getByText(passkey.name)).toBeInTheDocument();
        });

        userEvent.click(screen.getByRole('button', { name: /create passkey/i }));
        userEvent.click(screen.getByRole('button', { name: /learn more/i }));
        expect(mockOnPrimaryButtonClick).toHaveBeenCalled();
        expect(mockOnSecondaryButtonClick).toHaveBeenCalled();
    });
});
