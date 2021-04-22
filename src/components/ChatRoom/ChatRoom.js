import React from 'react';

import useChat from '../useChat';

const ChatRoom = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessages } = useChat(roomId);
    return(
        <>
        </>
    )
};

export default ChatRoom;