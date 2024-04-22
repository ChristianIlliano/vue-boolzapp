const { createApp } = Vue;

createApp({
    data() {
        return {

            // ricerca nella chat
            search: '',

            // indice attivo nel curChat
            activeIndex: 0,

            // Nuovo messaggio
            newMessage: {
                date: '',
                message: '',
                status: 'sent'
            },

            // Creo il mio array di chat
            contacts: [
                {
                    name: 'Michele',
                    avatar: '../img/avatar_1.jpg',
                    visible: true,
                    // Array di array
                    messages: [
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'sei andata dal medico?',
                            status: 'send'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'si, mi ha prescritto un medicinale',
                            status: 'received'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'perfetto',
                            status: 'send'
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: '../img/avatar_2.jpg',
                    visible: true,
                    // Array di array
                    messages: [
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'che hai fatto oggi?',
                            status: 'send'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'nada tu?',
                            status: 'received'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'perfetto',
                            status: 'send'
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: '../img/avatar_3.jpg',
                    visible: true,
                    // Array di array
                    messages: [
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'ti è piaciuto lo spettacolo?',
                            status: 'send'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'no noioso',
                            status: 'received'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'perfetto',
                            status: 'send'
                        }
                    ],
                },

                {
                    name: 'Alessandro B.',
                    avatar: '../img/avatar_4.jpg',
                    visible: true,
                    // Array di array
                    messages: [
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'hai capito Vue Js?',
                            status: 'send'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'si, mi sta salvando la vita',
                            status: 'received'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'perfetto',
                            status: 'send'
                        }
                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: '../img/avatar_5.jpg',
                    visible: true,
                    // Array di array
                    messages: [
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'sei sveglia?',
                            status: 'send'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'si, ho un mal di testa cane',
                            status: 'received'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'perfetto',
                            status: 'send'
                        }
                    ],
                },

                {
                    name: 'Claudia',
                    avatar: '../img/avatar_6.jpg',
                    visible: true,
                    // Array di array
                    messages: [
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'che vuoi mangiare stasera?',
                            status: 'send'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'non lo so',
                            status: 'received'
                        },
                        {
                            date: '22/04/2024 13:59:45',
                            message: 'perfetto',
                            status: 'send'
                        }
                    ],
                },
            ]
        }
    },
    methods: {
        activeChat: function(clickedIndex) {
            this.activeIndex = clickedIndex;
        },

        sendMessage: function(){
            this.contacts[this.activeIndex].messages.push({...this.newMessage})
            this.newMessage.message = ''

            setTimeout(() => {
                this.contacts[this.activeIndex].messages.push({
                    date:'',
                    message: 'ok',
                    status: 'received'
                })
            }, 1000);
        }
    }
}).mount("#app");