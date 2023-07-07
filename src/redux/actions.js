export const register = (user) => {
    return { type: 'REGISTER', payload: user };
  };
  
  export const login = (user) => {
    return { type: 'LOGIN', payload: user };
  };
  
  export const logout = () => {
    return { type: 'LOGOUT' };
  };
  
  export const addMessage = (message) => {
    return { type: 'ADD_MESSAGE', payload: message };
  };
  
  export const deleteMessage = (messageId) => {
    return { type: 'DELETE_MESSAGE', payload: messageId };
  };
  