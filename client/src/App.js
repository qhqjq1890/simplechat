import styled from "styled-components";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

const Wrapper = styled.div`
  html * {
    font-family: Arial;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: rgb(63, 73, 204);
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  .btn {
    padding: 14px 14px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    border: none;
  }
  .btn-outline {
    color: rgb(153, 217, 234);
    border: 1px solid rgb(153, 217, 234);
    background: rgb(63, 73, 204);
  }
  .btn-primary {
    background: rgb(153, 217, 234);
    color: rgb(0, 24, 111);
  }
  .btn-secondary {
    background: rgb(0, 24, 111);
    color: #fff;
  }
`;

function App() {
  return <div>fuck</div>;
}

export default App;
