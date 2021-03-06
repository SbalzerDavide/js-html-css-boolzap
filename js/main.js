/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // our occount
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // contacts list
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
        //index selector
        actualIndex:0,
        actualEmoji: 0,
        actualMenu: 0,
        indexQuote: 0,
        //show hidden
        isHidden: false,
        isHiddenMenu: false,
        isHiddenQuote: false,
        //other var
        insertMessage: '',
        inputSearch: '',
        arrayLastaccess:[],
        textlastMessages: [],
        insertQuote: '',
        author: '',
    },
    created(){
        this.firstAccess();
    },
    methods: {
        /**
         * functions play at reload page
         */
        firstAccess(){
            this.onlyReceived();   
        },
        /**
         * take index of selected contanct 
         * @param {*} index index
         */
        takeIndex(index){
            this.actualIndex = index;
            this.onlyReceived();
            this.isHiddenQuote = false;

            //fix error (... .message[this.indexQuote] is undefined) when change contact after make a quote
            this.indexQuote = 0;

        },
        /**
         * at click show and hidden emoji box
         */
        showEmoji(){
            this.isHidden = !this.isHidden;
            this.scrollToEnd();
        },
        /**
         * at click over a message show the menu
         * @param {} index index of clicked message
         */
        showMenu(index){
            this.actualMenu = index;
            this.isHiddenMenu = !this.isHiddenMenu;
            this.scrollToEnd();
        },
        /**
         * delate relative message
         * @param {} index index of clicked message
         */
        delateMessage(index){
            this.contacts[this.actualIndex].messages.splice(index,1);
            this.isHiddenMenu = !this.isHiddenMenu;
            this.onlyReceived();
        },
        setImportant(index){
            this.contacts[this.actualIndex].messages[index].important = !this.contacts[this.actualIndex].messages[index].important;
            this.isHiddenMenu = !this.isHiddenMenu;
        },
        quoteMessage(index){
            this.indexQuote = index;
            this.isHiddenQuote = true;
            this.isHiddenMenu = !this.isHiddenMenu;
        },
        /**
         * scroll main content to the and
         */
        scrollToEnd(){    
            setTimeout(() =>{
                this.$refs.container.scrollTop = this.$refs.container.scrollHeight ;
            },20)
        },
        /**
         * put clicked emoji in input text
         * @param {} index index of clicked emoji
         */
        addEmoji(index){
            let first = this.insertMessage;
            let second = this.emoji[this.actualEmoji].emojis[index];
            var res = first.concat(second);
            this.insertMessage = res;
        },
        /**
         * select category of selected emoji
         * @param {*} index index of category
         */
        selectType(index){
            this.actualEmoji = index;
        },
        /**
         * create a new object in array of message
         */
        sendMessage(){
            // all condition for add a quote in the new message
            if (this.isHiddenQuote == true){
                this.insertQuote = this.contacts[this.actualIndex].messages[this.indexQuote].message; 

                // add author quote in message object is the only solution I find for not change the author every time I click to open the message menu 
                if (this.contacts[this.actualIndex].messages[this.indexQuote].status == "sent"){
                    this.author = 'tu';
                } else {
                    this.author = this.contacts[this.actualIndex].name;
                };
            };
            if (this.insertMessage.trim() != ''){
                this.contacts[this.actualIndex].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: this.insertMessage,
                        status: 'sent',
                        quote: this.insertQuote,
                        authorQuote: this.author,
                    }
                    );
                    setTimeout(this.botMessage, 1000);
                };
            this.insertMessage = '';
            this.scrollToEnd();
            this.insertQuote = '';
            this.isHiddenQuote = false;
        },
        /**
         * send the bot
         */
        botMessage(){
            this.contacts[this.actualIndex].messages.push(
                {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'Ciao sono ' + this.contacts[this.actualIndex].name,
                    status: 'received'
                }
            );
            this.scrollToEnd();
            this.onlyReceived();
        },
        /**
         * search inside name contacts
         */
        search(){
            this.contacts.forEach(contact => {
                contact.visible = false;
                if (contact.name.toLowerCase().includes(this.inputSearch.toLowerCase()) ){
                    contact.visible = true;
                };
            });
        },
        /**
         * filter only received message and set information of the last
         */
        onlyReceived(){
            this.textlastMessages = [];
            this.arrayLastaccess = []; 
            this.contacts.forEach(contact => {
                let message = contact.messages.filter(message =>{
                    if (message.status === 'received'){
                        return message;
                    };
                });
                let previewMessage = message[(message.length) - 1];
                if (message.length === 0){
                    this.textlastMessages.push('Non ci sono messaggi');
                    this.arrayLastaccess.push('');
                } else{
                    if (previewMessage.message.length > 19){
                        previewMessage.message = previewMessage.message.slice(0,20).concat('...');
                    };  
                    this.arrayLastaccess.push(previewMessage.date);

                    this.textlastMessages.push(previewMessage.message);
                }
            });
        },
    },

});