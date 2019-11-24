import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Parqueadero', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '', title: 'Usuario', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            {
                path: '', title: 'Clientes', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '', title: 'Ver Clientes', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: '', title: 'Crear Cliente', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: '', title: 'Modificar Cliente', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: '', title: 'Eliminar Cliente', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '', title: 'Applicacion Plantilla', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/tarea-components/editor', title: 'Editor Texto', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tarea-components/player', title: 'Video', icon: 'ft-video', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tarea-components/carousel', title: 'Carrusel', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tarea-components/maps', title: 'Mapa', icon: 'ft-map', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    
];
