import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Cookies from "js-cookie";
import { format, isToday, isYesterday } from "date-fns";
import { HomeIcon } from "@heroicons/react/24/outline";
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle
import Image from 'next/image'; // Import Image component

const Sidebar = ({ users, onSelectUser, selectedUserId }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300 bg-white dark:bg-black text-black dark:text-white h-full overflow-y-auto sidebar">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Neaar2You Messenger</h2>
        <button
          onClick={() => (window.location.href = "/")}
          className="text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 border-none"
        >
          <HomeIcon className="w-6 h-6" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg dark:bg-black dark:text-white dark:border-black"
      />
      <ul className="overflow-y-auto max-h-[calc(100vh-200px)]">
        {users.map((user) => (
          <li
            key={user.id}
            className={`flex items-center p-3 mb-2 bg-white rounded-lg cursor-pointer hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800 ${user.id === selectedUserId ? "bg-blue-50 dark:bg-blue-900" : ""}`}
            onClick={() => onSelectUser(user.id)}
          >
            <Image
              src={user.avatar || "https://via.placeholder.com/40"}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div className="flex-1">
              <p className="font-medium">{user.name}</p>
              <p className="text-xs text-gray-500 truncate dark:text-white">
                {user.lastMessage || "Start a conversation"}
              </p>
            </div>
            <span className="text-xs text-gray-400 dark:text-white">1 min ago</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatMessages = ({ messages, senderId, users }) => {
  const groupedMessages = messages.reduce((groups, message) => {
    const messageDate = new Date(message.timestamp).toDateString();
    if (!groups[messageDate]) {
      groups[messageDate] = [];
    }
    groups[messageDate].push(message);
    return groups;
  }, {});

  const formatDateHeader = (date) => {
    const messageDate = new Date(date);
    if (isToday(messageDate)) return "Today";
    if (isYesterday(messageDate)) return "Yesterday";
    return format(messageDate, "MMMM d, yyyy");
  };

  return (
    <div className="overflow-y-auto h-full">
      {Object.keys(groupedMessages).map((date) => (
        <div key={date}>
          <div className="text-center text-gray-500 text-sm my-4">
            {formatDateHeader(date)}
          </div>
          {groupedMessages[date].map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 ${msg.sender === senderId ? "justify-end" : "justify-start"
                }`}
            >
              {msg.sender !== senderId && (
                <Image
                  src={users.find((u) => u.id === msg.sender)?.avatar || "https://via.placeholder.com/40"}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full mr-3"
                />
              )}
              <div
                className={`p-3 rounded-lg ${msg.sender === senderId ? "bg-blue-500 text-white" : "bg-white"}`}
              >
                <p>{msg.content}</p>
                <span className="text-xs text-gray-300">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
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

        setMessages(Array.isArray(result) ? result : []);
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
        if (Array.isArray(userData)) {
          setUsers(userData);
        } else {
          console.error(userData.error);
        }
      });
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
    }
  }, [socket, senderId]);

  const sendMessage = async () => {
    if (!newMessage.trim()) {
      console.warn("Cannot send an empty message.");
      return;
    }

    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      console.error("No access token found");
      return;
    }

    try {
      const messageData = {
        sender: senderId,
        receiver: receiverId,
        content: newMessage,
        timestamp: new Date().toISOString(),
      };

      socket.emit("send_message", messageData);
      setSocketId(socket.id);

      setMessages((prevMessages) => [...prevMessages, messageData]);
      setNewMessage(""); // Clear input after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSelectUser = (userId) => {
    setReceiverId(userId);
    setMessages([]); // Clear existing messages on user change
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newMessage.trim()) {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-black">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar users={users} onSelectUser={handleSelectUser} selectedUserId={receiverId} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-white dark:bg-black border-b border-gray-300">
            <div className="flex items-center">
              <Image
                src={users.find((u) => u.id === receiverId)?.avatar || "https://via.placeholder.com/40"}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <p className="font-medium text-lg">
                {users.find((u) => u.id === receiverId)?.name || "Select a user"}
              </p>
            </div>
            <ThemeToggle /> {/* Added ThemeToggle */}
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <ChatMessages messages={messages} senderId={senderId} users={users} />
          </div>
          {receiverId && (
            <div className="p-4 border-t border-gray-300">
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={handleKeyPress}
                  className="flex-1 p-3 border border-gray-300 rounded-lg dark:bg-black dark:text-white dark:border-black"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
                  disabled={!newMessage.trim()}
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
