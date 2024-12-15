import React, { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";
import Cookies from "js-cookie";

const Sidebar = ({ users, onSelectUser, selectedUserId }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4 border-r border-gray-300">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className={`p-2 mb-2 bg-white rounded-lg cursor-pointer hover:bg-gray-100 ${
              user.id === selectedUserId ? "bg-blue-100" : ""
            }`}
            onClick={() => onSelectUser(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [socketId, setSocketId] = useState("");
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://near-to-you-backend.onrender.com/api/v1/users/get-user-profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const result = await response.json();

        if (result.success) {
          const id = result.data._id;
          setSenderId(id);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Failed to fetch user profile.", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const newSocket = io("https://near-to-you-backend.onrender.com");

    setSocket(newSocket);

    newSocket.on("connect", () => {
      setSocketId(newSocket.id);
    });

    newSocket.on("receive_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.off("connect");
      newSocket.off("receive_message");
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://near-to-you-backend.onrender.com/api/v1/messages/${receiverId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const result = await response.json();

        setMessages(Array.isArray(result) ? result : []); // Ensure result is an array
        console.log("messages is", result);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [receiverId]);

  useEffect(() => {
    if (socket) {
      socket.on("user_data", (userData) => {
        console.log("User data:", userData);
        if (Array.isArray(userData)) {
          setUsers(userData);
        } else {
          console.error(userData.error);
        }
      });
      console.log("senderId is", senderId);
      socket.emit("get_user", senderId);
    }

    return () => {
      if (socket) {
        socket.off("user_data");
      }
    };
  }, [socket, senderId]);

  useEffect(() => {
    if (socket && senderId) {
      socket.emit("join", senderId);
      console.log(`User ${socket.id} joined room ${senderId}`);
    }
  }, [socket, senderId]);

  const sendMessage = async () => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      console.error("No access token found");
      return;
    }


    setReceiverId('671340030531ef68e677c309');

    try {
      const messageData = {
        sender: senderId, // Use senderId as sender
        receiver: receiverId, // Use receiverId as receiver
        content: newMessage, // Use newMessage as content
        timestamp: new Date().toISOString(),
      };

      // Emit the message via socket
      socket.emit("send_message", messageData);
      setSocketId(socket.id);
      
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleSelectUser = (userId) => {
    setReceiverId(userId);
    // setReceiverId("671340030531ef68e677c309");
  };

  return (
    <div className="flex h-screen max-w-4xl mx-auto border border-gray-300 rounded-lg overflow-hidden">
      <Sidebar users={users} onSelectUser={handleSelectUser} selectedUserId={receiverId} />
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 p-2 rounded-lg ${
                msg.sender === senderId
                  ? "bg-green-50 self-end text-end"
                  : "bg-white self-start"
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-xs text-gray-500">
                {formatTimestamp(msg.timestamp)}
              </span>
            </div>
          ))}
        </div>
        {/* {senderId} */}
        <div className="flex p-4 bg-white border-t border-gray-300">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
          />
          <button
            onClick={sendMessage}
            className="p-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
        {/* <div>Socket ID: {socketId}</div> */}
      </div>
    </div>
  );
};

export default ChatApp;
