interface LogoProps {
    light?: boolean;
}

function Logo({ light = false }: LogoProps) {
    const primaryColor = light ? '#ffffff' : '#1a1a2e';
    const accentColor = '#c9a227';

    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer record */}
            <circle cx="24" cy="24" r="22" stroke={primaryColor} strokeWidth="2" fill="none" />
            {/* Record grooves */}
            <circle cx="24" cy="24" r="18" stroke={primaryColor} strokeWidth="0.5" fill="none" opacity="0.5" />
            <circle cx="24" cy="24" r="14" stroke={primaryColor} strokeWidth="0.5" fill="none" opacity="0.5" />
            <circle cx="24" cy="24" r="10" stroke={primaryColor} strokeWidth="0.5" fill="none" opacity="0.5" />
            {/* Center label */}
            <circle cx="24" cy="24" r="6" fill={accentColor} />
            {/* Spindle hole */}
            <circle cx="24" cy="24" r="1.5" fill={primaryColor} />
        </svg>
    );
}

export default Logo;