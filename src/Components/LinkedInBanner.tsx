import {useEffect} from "react";

interface LinkedinProps {
    parentTheme: string;
}

export default function LinkedInBanner({parentTheme}: LinkedinProps) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [parentTheme]);

    return (
        <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="daniel-andersen-dev"
            data-version="v1">
            <a className="badge-base__link LI-simple-link"
               href="https://www.linkedin.com/in/daniel-andersen-dev?trk=profile-badge">Daniel Andersen</a>
        </div>
    );
}