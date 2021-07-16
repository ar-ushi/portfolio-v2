import React from 'react';

import {IconGitHub, IconCodepen, IconLinkedin, IconDottedBox} from './index';

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
    default: 
        return <IconCodepen />;
}
}