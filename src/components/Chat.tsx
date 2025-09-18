import { FC, useEffect, useRef, useState } from 'react';
import { IconButton, TextField, Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const COLOR_MAP = {
  primary: ['#1976d2', '#1565c0'],
  secondary: ['#9c27b0', '#7b1fa2'],
  success: ['#2e7d32', '#1b5e20'],
  error: ['#d32f2f', '#c62828'],
  info: ['#0288d1', '#01579b'],
  warning: ['#ed6c02', '#e65100']
};

export interface ChatProps {
  type: 'pop-up' | 'panel';
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  btnColor?: string;
  btnColorHover?: string;
  msgColor?: string;
  apiUrl: string;
  subscribeUrl?: string;
}

export const Chat: FC<ChatProps> = ({ type, color, btnColor, btnColorHover, msgColor, apiUrl, subscribeUrl }) => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!subscribeUrl) return;

    const eventSource = new EventSource(subscribeUrl, { withCredentials: false });

    const onMessage = (evt: MessageEvent) => {
      // TODO: Update payload structure, return to called if needed
      const text = evt.data;
      setMessages((prev) => [...prev, { text, sender: 'bot' }]);
    };

    const onError = () => {
      setMessages((prev) => [...prev, { text: 'Connection error. Retrying...', sender: 'bot' }]);
    };

    eventSource.addEventListener('message', onMessage);
    eventSource.addEventListener('error', onError);

    return () => eventSource.close();
  }, [subscribeUrl]);

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      try {
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input })
        });
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <Box
      sx={{
        width: '400px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: '80%',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              bgcolor: msg.sender === 'user' ? msgColor || COLOR_MAP[color][0] : 'grey.300',
              color: msg.sender === 'user' ? 'white' : 'black',
              textAlign: 'left',
              p: 1,
              borderRadius: 2,
              mb: 1
            }}>
            <Typography>{msg.text}</Typography>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          py: 1.5,
          px: 1,
          borderTop: '1px solid lightgrey',
          backgroundColor: 'grey.100'
        }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          sx={{
            backgroundColor: 'white'
          }}
        />
        <IconButton
          onClick={handleSendMessage}
          sx={{
            ml: 1,
            bgcolor: btnColor || COLOR_MAP[color][0],
            color: 'white',
            '&:hover': { backgroundColor: btnColorHover || COLOR_MAP[color][1] }
          }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
