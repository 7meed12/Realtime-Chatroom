const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat-room')
const newName = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg')
const rooms = document.querySelector('.chatRoom')


newChat.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChat.message.value.trim();
    chatroom.addChat(message)
    .then(()=>newChat.reset())
    .catch(err=>console.log(err));

});

newName.addEventListener('submit',e=>{
    e.preventDefault();
    const newN = newName.name.value.trim();
    chatroom.updateName(newN);
    newName.reset()
    updateMsg.innerText=`username updated to ${newN}`;
    setTimeout(() => updateMsg.innerText='' ,3000);
    
});
rooms.addEventListener('click', e=>{
    if(e.target.tagName === 'BUTTON' ){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChat(chat => chatUI.render(chat));

    }
})


const username = localStorage.username ? localStorage.username : 'anon' ;
const chatUI= new ChatUI(chatList);
const chatroom = new Room('general' , username);

chatroom.getChat(data=>chatUI.render(data))
