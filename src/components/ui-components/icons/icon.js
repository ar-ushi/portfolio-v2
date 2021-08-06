import React from 'react';

import {IconGitHub, IconCodepen, IconLinkedin, IconDottedBox, Logo, IconMedium} from './index';

export default function Icon({ name }){
switch (name) {
    case 'Codepen':
        return <IconCodepen />;
    case 'Github':
        return <IconGitHub />;
    case 'Linkedin':
        return <IconLinkedin />;
    case 'Dotted-Box':
        return <IconDottedBox />
    case 'Logo':
        return <Logo />
    case 'Medium':
        return <IconMedium />
    default: 
        return <IconCodepen />;
}
}