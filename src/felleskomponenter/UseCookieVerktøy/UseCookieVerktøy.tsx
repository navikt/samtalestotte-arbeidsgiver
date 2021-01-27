import useCookie from 'react-use-cookie';

export const UseCookieVerktøy = () => {
    const [userTokenForutsigbar, setUserTokenForutsigbar] = useCookie(
        'SamtalestotteArbeidsgiverSvar-forutsigbarhet',
        'ikke-svar-enda'
    );

    return (
        <div>
            <p>{userTokenForutsigbar}</p>
            <button onClick={() => setUserTokenForutsigbar('endret')}>Change token</button>
        </div>
    );
};
