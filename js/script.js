const { createApp } = Vue;

createApp({
    data() {
        return {
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
                    name: 'Samuele',
                    avatar: '../img/avatar_3.jpg',
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
                    name: 'Alessandro B.',
                    avatar: '../img/avatar_4.jpg',
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
                    name: 'Alessandro L.',
                    avatar: '../img/avatar_5.jpg',
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
                    name: 'Claudia',
                    avatar: '../img/avatar_6.jpg',
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
            ]
        }
    }
}).mount("#app");