import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type'    : 'group',
                'children': [
                    /*{
                        'id'   : 'sample',
                        'title': 'Sample',
                        'translate': 'NAV.SAMPLE.TITLE',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/sample',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.SAMPLE.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },*/{
                        'id' : 'analytics',
                        'title' : 'Analytics',
                        // 'translate' : 'NAV.SAMPLE.TITLE',
                        'type' : 'item',
                        'icon' : 'graphic_eq',
                        'url' : '/analytics'
                    },{
                        'id' : 'messengerConversation',
                        'title' : 'Messenger Conversation',
                        'type' : 'item',
                        'icon' : 'chat_bubble_outline',
                        'url' : '/messenger-conversation'
                    },{
                        'id' : 'postConversation',
                        'title' : 'Post Conversation',
                        'type' : 'item',
                        'icon' :  'art_track',
                        'url' : '/post-conversation'
                    }
                ]
            }
        ];
    }
}
