/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Nicola',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Simone',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Francesco',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],

            },
            {
                name: 'Marco',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],

            }
        ],
        emoji: [
            {
                type: 'Smileys',
                emojis: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑'
                ]
            },
            {
                type: 'People',
                emojis: ['👦', '👶', '👧', '👨', '👩', '👴', '👵', '👾', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍⚖️', '👩‍⚖️', '👨‍🌾', '👩‍🍳', '👩‍🔧', '👨‍💻', '👨‍🎤', '👨‍✈️', '👨‍🚀', '👩‍🚒', '🕵', '💂', '👷', '🤴', '👸', '🧙‍♀️', '🧙‍♂️', '🧞‍♀️', '🏃‍♀️', '💃', '🕺', '👯', '👯‍♂️', '👯‍♀️', '🧖‍♀️', '🧖‍♂️', '💆', '💆‍♂️', '💆‍♀️', '💇', '💇‍♂️', '💇‍♀️', '🚶', '🚶‍♂️'
                ]
            },
            {
                type: 'Animals',
                emojis: ['😺', '😸', '😹', '😻', '😼', '🙈', '🙉', '🙊', '🐵', '🦍', '🐶', '🐕', '🐩', '🐺', '🐈', '🦁', '🐯', '🐴', '🦄', '🐮', '🐷', '🐽', '🐭', '🐹', '🐻', '🐨', '🐼', '🐤', '🐥', '🐦', '🐧', '🦆', '🦉', '🐸', '🐊', '🐲', '🐉', '🦕', '🐳', '🐋', '🐙', '🐚', '💇‍♀️', '🦑', '🐝'
                ]
            }

        ],
        actualIndex:0,
        actualEmoji: 0,
        isHidden: false,
        insertMessage: '',
        inputSearch: '',
        dateLastAccess: '',
        textlastMessages: [],
    },
    created(){
        this.firstAccess();
    },
    methods: {
        firstAccess(){
            this.lastAccess(); 
            this.onlyReceived();   
        },
        takeIndex(index){
            this.actualIndex = index;
            this.lastAccess();
        },
        showEmoji(){
            this.isHidden = !this.isHidden;
            this.scrollToEnd();
        },
        scrollToEnd(){    
            setTimeout(() =>{
                this.$refs.container.scrollTop = this.$refs.container.scrollHeight ;
            },20)
        },
        addEmoji(index){
            let first = this.insertMessage;
            let second = this.emoji[this.actualEmoji].emojis[index];
            var res = first.concat(second);
            this.insertMessage = res;
        },
        selectType(index){
            this.actualEmoji = index;
        },
        sendMessage(){
            if (this.insertMessage.trim() != ''){
                this.contacts[this.actualIndex].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: this.insertMessage,
                        status: 'sent'
                    }
                    );
                    setTimeout(this.botMessage, 1000);
                };
            this.insertMessage = '';
            this.scrollToEnd();
        },
        botMessage(){
            this.contacts[this.actualIndex].messages.push(
                {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'Ciao sono ' + this.contacts[this.actualIndex].name,
                    status: 'received'
                }
            );
            this.scrollToEnd();
            this.lastAccess();
            this.onlyReceived();
        },
        search(){
            this.contacts.forEach(contact => {
                contact.visible = false;
                if (contact.name.toLowerCase().includes(this.inputSearch.toLowerCase()) ){
                    contact.visible = true;
                };
            });
        },
        lastAccess(){
            this.contacts[this.actualIndex].messages.forEach(message => {
                if (message.status == 'received'){
                    this.dateLastAccess = message.date;
                }
            })
        },
        onlyReceived(){
            this.textlastMessages = [];
            this.contacts.forEach(contact => {
                let message = contact.messages.filter(message =>{
                    if (message.status === 'received'){
                        return message;
                    };
                });
                this.textlastMessages.push(message[(message.length) - 1].message);
            });
        },
    },

});