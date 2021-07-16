import React from 'react';

import {IconGitHub, IconCodepen, IconLinkedin} from './index';

export default function Icon({ name }){
switch (name) {
    case 'Codepen':
        return <IconCodepen />;
    case 'GitHub':
        return <IconGitHub />;
    case 'Linkedin':
        return <IconLinkedin />;
}
}